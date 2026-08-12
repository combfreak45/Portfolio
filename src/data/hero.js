export const heroData = {
  name: 'Arjit Kedia',
  title: 'Software Engineer',
  bio: 'Software engineer at SAP Labs building scalable backend services and developer tooling. I care about clean architecture, fast systems, and products that feel good to use.',
  available: true,
  resumeUrl: import.meta.env.VITE_RESUME_URL,
  links: [
    { type: 'github', label: 'GitHub', href: import.meta.env.VITE_GITHUB_URL },
    { type: 'linkedin', label: 'LinkedIn', href: import.meta.env.VITE_LINKEDIN_URL },
    { type: 'email', label: 'Email', href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}` },
  ],
};
