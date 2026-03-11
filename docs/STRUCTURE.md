# Project Structure

## Folder Layout

```
cps-strategy/
├── docs/                        # Project documentation (this folder)
├── public/
│   └── images/                  # Static assets (logos, icons, photos)
├── src/
│   ├── app/                     # Next.js App Router pages and layouts
│   │   ├── globals.css          # Global styles + Tailwind + shadcn theme
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── sections/            # Page-level section components (Hero, About, etc.)
│   │   └── ui/                  # shadcn UI primitives (auto-managed)
│   ├── content/                 # Structured content data (JSON, TS constants)
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper, etc.)
├── components.json              # shadcn configuration
├── next.config.ts               # Next.js configuration
├── package.json
├── tailwind.config.ts           # Tailwind configuration (if present)
├── tsconfig.json
└── pnpm-lock.yaml
```

## Section Composition Rules

- Each major page section lives in `src/components/sections/` as its own file
- Section components are self-contained: they import their own shadcn primitives
- Sections are composed on page files in `src/app/`
- No section should directly import from another section

## Content Management Approach

- All display content lives in `src/content/` as TypeScript files or JSON
- Section components import content from `src/content/` — not hardcoded inline
- This separation allows content updates without touching component logic
- Images are stored in `public/images/` and referenced via absolute paths (`/images/...`)
