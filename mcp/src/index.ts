#!/usr/bin/env node

/**
 * cc-them MCP Server
 *
 * Exposes all profiles in /profiles/ as MCP tools.
 * Each persona gets two tools:
 *   - ask_{slug}          → freeform question to the persona
 *   - review_{slug}_code  → code review through the persona's lens
 *
 * Plus one meta tool:
 *   - list_personas        → discover available profiles
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROFILES_DIR = join(__dirname, "../../profiles");
const MODEL = "claude-opus-4-5";

// ─── Profile loading ──────────────────────────────────────────────────────────

interface Persona {
  slug: string;
  name: string;
  description: string;
  systemPrompt: string;
}

function loadPersonas(): Map<string, Persona> {
  const personas = new Map<string, Persona>();

  if (!existsSync(PROFILES_DIR)) {
    console.error(`Profiles directory not found: ${PROFILES_DIR}`);
    return personas;
  }

  const slugs = readdirSync(PROFILES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const slug of slugs) {
    const agentPath = join(PROFILES_DIR, slug, "agent.md");
    if (!existsSync(agentPath)) continue;

    const raw = readFileSync(agentPath, "utf-8");
    const { data: frontmatter, content: systemPrompt } = matter(raw);

    personas.set(slug, {
      slug,
      name: frontmatter.name ?? slug,
      description: frontmatter.description ?? "",
      systemPrompt: systemPrompt.trim(),
    });
  }

  return personas;
}

// ─── Tool definitions ─────────────────────────────────────────────────────────

function buildTools(personas: Map<string, Persona>): Tool[] {
  const tools: Tool[] = [
    {
      name: "list_personas",
      description:
        "List all available tech persona profiles that can be queried.",
      inputSchema: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  ];

  for (const [slug, persona] of personas) {
    const safeName = slug.replace(/-/g, "_");

    tools.push({
      name: `ask_${safeName}`,
      description: `Ask a question and get a response through ${persona.name}'s documented reasoning framework. ${persona.description}`,
      inputSchema: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The question or problem to analyze",
          },
          context: {
            type: "string",
            description:
              "Optional: additional context (code, architecture diagrams, requirements)",
          },
        },
        required: ["question"],
      },
    });

    tools.push({
      name: `review_${safeName}_code`,
      description: `Get a code review through ${persona.name}'s lens. Applies their documented standards for what good code looks like.`,
      inputSchema: {
        type: "object",
        properties: {
          code: {
            type: "string",
            description: "The code to review",
          },
          language: {
            type: "string",
            description: "Programming language (optional, will be inferred)",
          },
          focus: {
            type: "string",
            description:
              "Optional: specific aspect to focus on (e.g., 'data model', 'error handling', 'abstraction')",
          },
        },
        required: ["code"],
      },
    });
  }

  return tools;
}

// ─── Tool execution ───────────────────────────────────────────────────────────

const anthropic = new Anthropic();

async function runPersonaQuery(
  persona: Persona,
  userMessage: string
): Promise<string> {
  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 2048,
    system: persona.systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  return response.content
    .filter((b) => b.type === "text")
    .map((b) => (b as { type: "text"; text: string }).text)
    .join("\n");
}

// ─── Server setup ─────────────────────────────────────────────────────────────

async function main() {
  const personas = loadPersonas();
  const tools = buildTools(personas);

  const server = new Server(
    { name: "cc-them", version: "0.1.0" },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    // Meta tool
    if (name === "list_personas") {
      const list = Array.from(personas.values())
        .map((p) => `**${p.name}** (\`${p.slug}\`)\n${p.description}`)
        .join("\n\n");
      return { content: [{ type: "text", text: list }] };
    }

    // Resolve slug from tool name
    const askMatch = name.match(/^ask_(.+)$/);
    const reviewMatch = name.match(/^review_(.+)_code$/);
    const rawSlug = (askMatch ?? reviewMatch)?.[1]?.replace(/_/g, "-");
    const persona = rawSlug ? personas.get(rawSlug) : undefined;

    if (!persona) {
      return {
        content: [{ type: "text", text: `Unknown tool: ${name}` }],
        isError: true,
      };
    }

    try {
      let userMessage: string;

      if (askMatch) {
        const { question, context } = args as {
          question: string;
          context?: string;
        };
        userMessage = context
          ? `${question}\n\n---\nContext:\n${context}`
          : question;
      } else {
        // code review
        const { code, language, focus } = args as {
          code: string;
          language?: string;
          focus?: string;
        };
        const lang = language ? ` (${language})` : "";
        const focusNote = focus ? `\n\nFocus especially on: ${focus}` : "";
        userMessage = `Please review this code${lang}:${focusNote}\n\n\`\`\`\n${code}\n\`\`\``;
      }

      const result = await runPersonaQuery(persona, userMessage);
      return { content: [{ type: "text", text: result }] };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true,
      };
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("cc-them MCP server running");
}

main().catch(console.error);
