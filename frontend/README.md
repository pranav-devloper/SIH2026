# AirIndex India Frontend

## Deploy to Vercel

Create a new Vercel project from this repository and set **Root Directory** to
`frontend`. Vercel will use the included `vercel.json` and run the production
build automatically.

Add this environment variable in the Vercel project settings:

```text
VITE_API_URL=https://your-backend-domain.vercel.app/api
```

The backend must allow requests from the deployed frontend origin. After
deployment, routes such as `/dashboard` work on direct navigation and refresh.

For local development, run:

```bash
npm install
npm run dev
```

The Vite development proxy forwards `/api` requests to the local backend.

## Project Template Notes

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
