# George Garcia — Developer Portfolio

The source for [georgegarciadev.com](https://georgegarciadev.com): a single-page site that showcases my
full-stack work. It was rebuilt from the original Create React App version into a Vite + TypeScript app
with a dark, glassmorphic theme, a data-driven projects section, and motion throughout.

## Tech stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation (aurora background, scroll reveals, rotating hero text)
- **lucide-react** icons
- **EmailJS** for the contact form (no backend needed)

## Featured projects

The projects section is data-driven from [`src/data/projects.ts`](src/data/projects.ts):

- **Glow** — a video-first dating app (NestJS, Postgres, Redis, LiveKit, Socket.IO).
- **Mock Bank** — a mock retail bank on a double-entry ledger, with partner Network + Connect APIs and a staff admin console (NestJS, Postgres, Drizzle).
- **Help Desk Hero** — a ServiceNow-style IT ticketing console with an activity timeline, bulk actions, templates, CSV export, and SLA/workload dashboards (React, RTK Query, NestJS, Cognito).
- **Lucky Spin Casino** — a provably-fair casino that funds a wallet through Mock Bank's Network and Connect APIs (React, Express, SQLite).
- **This portfolio** — the site itself.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build to dist/
npm run preview    # serve the built dist/ locally
```

### Environment

The contact form uses EmailJS. Copy the example file and fill in your values (Vite only exposes vars
prefixed with `VITE_`):

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The form degrades gracefully when these are unset (it just reports that messaging is unavailable).

## Deployment

The build is a set of static files in `dist/`. In production it ships as an nginx container
(see [`Dockerfile`](Dockerfile) + [`nginx.conf`](nginx.conf)) and runs behind Caddy as part of the
one-box Docker Compose stack that hosts the projects above under `georgegarciadev.com`.
