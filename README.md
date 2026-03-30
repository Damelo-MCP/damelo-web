# Dámelo

Share your AI sessions with your team. Export, import, and browse Claude Code sessions across your organization. Nothing gets lost.

Built for teams that ship with AI.

## What is Dámelo?

AI coding sessions are ephemeral — once the conversation ends, the context is gone. Dámelo captures and shares those sessions so your team can learn from each other's work.

- **Export sessions** — Save Claude Code sessions with a single command
- **Import sessions** — Pull a teammate's session into your local context
- **Browse team sessions** — See what your team shipped, debugged, or discovered

## How it works

Dámelo is an MCP server that integrates directly with Claude Code. Two ways to use it:

**Natural language:**
```
> export this session to damelo
> show me team sessions
> import carlos's last session
```

**Slash command:**
```
> /tomalo
```
Exports the current session in the background while you keep working.

## Tech stack

- Next.js 16 / React 19
- Tailwind CSS
- MCP (Model Context Protocol)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Links

- [damelo.sh](https://damelo.sh)
- [GitHub](https://github.com/Damelo-MCP)
