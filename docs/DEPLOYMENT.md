# Deployment Guide

## GitHub Repository Setup

1. Create a new GitHub repository (public or private)
2. Initialize and push:
   ```bash
   cd cps-strategy
   git init
   git add .
   git commit -m "Initial scaffold"
   git branch -M main
   git remote add origin https://github.com/<org>/cps-strategy.git
   git push -u origin main
   ```

## Vercel Project Setup

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository
3. Configure project settings:

| Setting           | Value           |
|-------------------|-----------------|
| Framework Preset  | Next.js         |
| Root Directory    | `.` (project root) |
| Build Command     | `pnpm build`    |
| Install Command   | `pnpm install`  |
| Output Directory  | (leave blank)   |

4. Click **Deploy**

## Root Directory Rules

- The Vercel root directory must point to the project root where `package.json` lives
- Do NOT set root directory to `src/` or any subfolder
- If this repo is nested inside a parent folder, set root directory to `cps-strategy/`

## Build Command

```bash
pnpm build
```

This runs `next build` which produces the production-optimized output in `.next/`.

## Environment Variable Management

Add environment variables in Vercel Dashboard → Project → Settings → Environment Variables.

| Variable                        | Scope       | Description                  |
|---------------------------------|-------------|------------------------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Production  | Google Analytics 4 ID        |
| `NEXT_PUBLIC_SITE_URL`          | All         | Canonical site URL           |

- Prefix client-side variables with `NEXT_PUBLIC_`
- Server-only variables do not need the prefix

## How to Redeploy

- **Automatic:** Push to `main` branch triggers auto-deploy
- **Manual:** Vercel Dashboard → Deployments → Redeploy
- **CLI:** `pnpm dlx vercel --prod` (requires Vercel CLI auth)

## Preview Deployments

- Every pull request automatically gets a preview URL
- Preview URLs are available in the GitHub PR checks
- Use preview deployments for review before merging to `main`
