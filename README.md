# AtraX Website

Premium multi-page presentation site for AtraX, a software agency focused on MVPs, product development, dedicated teams, staff augmentation, QA automation, cloud, and full SDLC delivery.

## Stack

- React
- TypeScript
- Vite
- React Router
- Lucide icons

## Pages

- `/` - editorial home page with animated project console
- `/work` - portfolio, project-video reels, and case-study previews
- `/services` - software services and industry coverage
- `/process` - delivery process, team signal, and testimonials
- `/contact` - presentation-only project intake page

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Deployment

The app uses client-side routes. `vercel.json` rewrites all paths to `index.html` for direct route loads on Vercel.
