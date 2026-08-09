# Tshiamo Diphoko Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local environment file:
   ```bash
   copy .env.example .env.local
   ```
3. Add your Resend API key in `.env.local`.
4. Start the app:
   ```bash
   npm run dev
   ```

## Production build

```bash
npm run build
npm run start
```

## Deployment

This project is configured for Vercel deployment.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the `RESEND_API_KEY` environment variable in Vercel.
4. Deploy.

## Notes

- The contact form uses the Vercel server runtime via App Router route handlers.
- Static export is not enabled, so server routes work correctly on Vercel.
