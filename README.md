# FindJob

Ejemplo básico de portal de empleos con **Next.js 15 (App Router) + TypeScript**.
Login y trabajos con datos dummy.

## Ejecutar

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # verificación de tipos
npm run build      # build de producción
```

Usuario demo: `demo@findjob.com` / `123456` (también `fernando@findjob.com` / `123456`).

## Arquitectura

Organizada por **features** (módulos de negocio). `app/` solo define rutas y compone componentes;
la lógica vive en `features/`.

```
src/
├── app/                        # Rutas (App Router) — solo composición
│   ├── (auth)/login/           # /login (pública)
│   ├── (protected)/            # Grupo de rutas privadas
│   │   ├── layout.tsx          # Valida sesión + Navbar
│   │   └── jobs/               # /jobs y /jobs/[id]
│   ├── layout.tsx              # Layout raíz + metadata
│   ├── page.tsx                # / → redirige a /jobs o /login
│   └── not-found.tsx
├── components/                 # Componentes compartidos (sin lógica de negocio)
│   ├── layout/Navbar.tsx
│   └── ui/                     # Button, Card, Badge, TagList, Logo, icons
├── features/
│   ├── auth/
│   │   ├── actions.ts          # Server Actions: loginAction, logoutAction
│   │   ├── components/         # LoginForm, LogoutButton
│   │   ├── data/               # users.mock.ts (dummy)
│   │   ├── lib/session.ts      # Crear / leer / borrar la cookie de sesión
│   │   ├── services/           # auth.service.ts (validar credenciales)
│   │   └── types.ts
│   ├── jobs/
│   │   ├── components/         # JobList, JobCard, JobFiltersBar, JobDetail, JobSummary, RelatedJobs, ApplyButton
│   │   ├── data/               # jobs.mock.ts (dummy)
│   │   ├── hooks/              # useJobFilters.ts
│   │   ├── lib/                # filterJobs.ts (función pura)
│   │   ├── services/           # jobs.service.ts (getJobs, getJobById, getRelatedJobs)
│   │   └── types.ts
│   └── theme/
│       ├── components/         # ThemeToggle (botón claro/oscuro)
│       ├── lib/                # theme.ts (leer cookie en servidor), isTheme.ts
│       └── types.ts
├── lib/                        # constants.ts (rutas, cookie), cn.ts
├── styles/globals.css
└── middleware.ts               # Protección de rutas por cookie
```

### Flujo de datos

```
Página (Server Component) → service → data/*.mock.ts
                ↓ props tipadas
      Componentes (Client solo donde hay interacción)
```

- **Services**: única capa que conoce el origen de los datos. Para usar una API o base de datos real
  solo se reemplaza `jobs.service.ts` / `auth.service.ts`.
- **Server Components por defecto**; `"use client"` solo en `LoginForm`, `JobList` (filtros) y `ApplyButton`.
- **Autenticación en dos capas**: `middleware.ts` redirige rápido; `(protected)/layout.tsx` valida la sesión en servidor.
- **Server Actions** para login/logout (sin API routes).
- **Modo claro / oscuro**: colores definidos como variables CSS en `globals.css`. La elección se guarda en la
  cookie `findjob_theme` y el servidor la aplica como `<html data-theme="...">`, así no hay parpadeo al cargar.
  Sin elección guardada se sigue la preferencia del sistema operativo.

> ⚠️ Es un ejemplo: las contraseñas están en texto plano y la cookie no está firmada.
> Para producción usar una base de datos y una librería como Auth.js o sesiones firmadas.
