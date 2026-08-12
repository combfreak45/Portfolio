export const projectsData = [
  {
    title: 'Dev Notes CLI',
    date: 'Mar 2024',
    description: 'A terminal tool for quickly capturing and searching code snippets and notes, built with Go and stored locally in SQLite. Cut context-switching time by ~30% in daily dev workflows.',
    tags: ['Go', 'SQLite', 'CLI'],
    link: 'https://github.com/yourusername/dev-notes',
    demo: null,
    caseStudy: {
      problem: 'Every time I hit an unfamiliar API or needed a past snippet, I broke flow to search browser bookmarks or grep through old files. The friction was small per instance but compounded across a workday.',
      approach: 'Built a Go CLI that stores notes in a local SQLite database with full-text search. The entire interaction — save, tag, retrieve — happens in under two keystrokes without leaving the terminal.',
      outcome: 'Eliminated the context-switch entirely for day-to-day lookups. After a month of use across two projects, estimated ~30% reduction in time spent searching for prior work.',
    },
  },
  {
    title: 'Budget Tracker',
    date: 'Nov 2023',
    description: 'A minimal web app for tracking monthly expenses with category breakdowns and CSV export. Handles 1,000+ transactions with sub-100ms query times via IndexedDB.',
    tags: ['React', 'Vite', 'Tailwind', 'IndexedDB'],
    link: 'https://github.com/yourusername/budget-tracker',
    demo: 'https://budget-tracker.yourdomain.com',
  },
  {
    title: 'Raycast Extension — Jira Quick Search',
    date: 'Jul 2023',
    description: 'A Raycast extension to search and open Jira tickets without leaving the keyboard. Saves ~5 clicks per lookup and has been installed by 200+ users.',
    tags: ['TypeScript', 'Raycast API'],
    demo: 'https://www.raycast.com/yourusername/jira-quick-search',
  },
];
