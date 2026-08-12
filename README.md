# Arjit Kedia — Portfolio

Personal portfolio site built with React 19, Vite, and Tailwind CSS v4.

**Live:** [arjitkedia.dev](https://arjitkedia.dev)

## Stack

- **React 19** + **Vite 8** — fast dev server and build
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — utility-first styling
- **EmailJS** — contact form without a backend
- **Umami** — privacy-friendly analytics
- **Oxlint** — fast linter

## Sections

Hero · Experience · Projects · Education · Skills · Contact

## Getting started

```bash
npm install
cp .env.example .env   # fill in your keys
npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_CONTACT_EMAIL` | Fallback email shown on form error |
| `VITE_GITHUB_URL` | GitHub profile URL |
| `VITE_LINKEDIN_URL` | LinkedIn profile URL |
| `VITE_RESUME_URL` | Direct link to resume PDF |
| `VITE_UMAMI_WEBSITE_ID` | Umami analytics website ID |

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |
