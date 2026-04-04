# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### GoBrain (`artifacts/gobrain/`)
- **Type**: React + Vite (static frontend, no backend)
- **Preview path**: `/`
- **Description**: Marketing website redesign for gobrain.pl in Apple-style minimalism
- **Stack**: React 19, Vite, Tailwind CSS, shadcn/ui, Framer Motion, wouter
- **Key files**:
  - `src/pages/HomePage.tsx` — Full homepage with 12 sections
  - `src/components/Navbar.tsx` — Sticky glassmorphism navbar
  - `src/components/Footer.tsx` — Footer with navigation links
  - `src/index.css` — GoBrain theme (primary blue #0066cc, accent green #00aa55)
- **Routing (wouter)**: `/` (Home), `/its`, `/strefa-terapeuty`, `/szkolenia-i-webinary`, `/blog`, `/faq`, `/pomoc`
- **Subpages complete**: All 6 subpages implemented with real content from gobrain.pl

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
