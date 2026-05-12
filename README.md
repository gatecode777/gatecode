# AdminCore — Company Admin Panel · Phase 1

A modern, production-ready admin panel built with **Next.js 15**, **TypeScript strict**, **MongoDB/Mongoose**, and custom **JWT authentication** via HTTP-only cookies.

---

## Tech Stack

| Layer          | Technology                            |
|----------------|---------------------------------------|
| Framework      | Next.js 15 · App Router               |
| Language       | TypeScript (strict mode)              |
| Styling        | CSS Modules + CSS Custom Properties   |
| State          | Zustand (auth slice, sessionStorage)  |
| Database       | MongoDB + Mongoose 9                  |
| Auth           | JWT + HTTP-only cookies (7-day)       |
| Fonts          | Plus Jakarta Sans + JetBrains Mono    |

---

## Project Structure

```
admin-panel/
├── middleware.ts                  ← Route protection (Next.js edge)
├── scripts/
│   └── seed-admin.ts             ← One-shot admin seed script
└── src/
    ├── app/
    │   ├── globals.css            ← Design tokens + global reset
    │   ├── layout.tsx             ← Root layout
    │   ├── page.tsx               ← / → redirects to /admin/login
    │   ├── admin/
    │   │   ├── layout.tsx
    │   │   ├── login/page.tsx     ← /admin/login
    │   │   └── dashboard/page.tsx ← /admin/dashboard (protected)
    │   └── api/admin/
    │       ├── login/route.ts     ← POST /api/admin/login
    │       ├── logout/route.ts    ← POST /api/admin/logout
    │       └── me/route.ts        ← GET  /api/admin/me
    ├── components/admin/
    │   ├── styles/                ← Scoped CSS Modules
    │   │   ├── LoginPage.module.css
    │   │   ├── Sidebar.module.css
    │   │   └── Dashboard.module.css
    │   ├── LoginPageClient.tsx
    │   ├── Sidebar.tsx
    │   └── DashboardClient.tsx
    ├── lib/
    │   ├── db.ts                  ← Mongoose connection (singleton)
    │   ├── jwt.ts                 ← sign / verify helpers
    │   └── utils.ts               ← cn, formatDate, formatNumber …
    ├── models/
    │   └── Admin.ts               ← Mongoose schema + bcrypt hooks
    ├── store/
    │   └── authStore.ts           ← Zustand auth store
    └── types/
        └── index.ts               ← Shared TypeScript interfaces
```

---

## Quick Start

### 1 · Install

```bash
npm install
```

### 2 · Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
MONGODB_URI=mongodb://localhost:27017/company-admin
JWT_SECRET=your-super-secret-key-minimum-32-characters
ADMIN_EMAIL=admin@yourcompany.com
ADMIN_PASSWORD=YourSecureP@ssword1
```

### 3 · Seed the first admin

```bash
npm run seed
```

### 4 · Dev server

```bash
npm run dev
```

Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

---

## Auth Flow

```
Browser                  Middleware               API / DB
  │                           │                      │
  │── POST /api/admin/login ──────────────────────►  │
  │                           │         validate creds│
  │                           │         bcrypt.compare│
  │◄── Set-Cookie: admin_token (httpOnly, 7d) ──────  │
  │                           │                      │
  │── GET /admin/dashboard ──►│                      │
  │                           │ verify JWT cookie     │
  │                           │ inject x-admin-id hdr │
  │◄── 200 Dashboard ─────────│                      │
  │                           │                      │
  │── POST /api/admin/logout ─────────────────────►  │
  │◄── Clear cookie ──────────────────────────────   │
  │── redirect /admin/login ──────────────────────   │
```

---

## Scripts

| Command              | Description                  |
|----------------------|------------------------------|
| `npm run dev`        | Start dev server             |
| `npm run build`      | Production build             |
| `npm run start`      | Start production server      |
| `npm run type-check` | TypeScript strict check      |
| `npm run lint`       | ESLint                       |
| `npm run seed`       | Create initial admin in DB   |

---

## Design System

Primary: `#0FB9B1`  
All tokens live in `src/app/globals.css` as CSS custom properties — override them in one place to retheme the entire panel.

---

## Phase Roadmap

- [x] **Phase 1** — Auth + Dashboard shell *(this branch)*
- [ ] **Phase 2** — User management CRUD
- [ ] **Phase 3** — Content management system
- [ ] **Phase 4** — Media library & file uploads
- [ ] **Phase 5** — Real analytics integration
- [ ] **Phase 6** — Public website frontend

---

## Security Checklist

- [x] Passwords hashed — bcrypt, 12 rounds
- [x] JWT stored in HTTP-only cookie (XSS-proof)
- [x] All `/admin/*` routes protected by edge middleware
- [x] Cookie `secure: true` in production, `sameSite: lax`
- [x] Admin panel excluded from search engine indexing
- [x] TypeScript strict mode — no implicit `any`
