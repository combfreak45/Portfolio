export const experienceData = [
  {
    company: 'SAP Labs',
    roles: [
      {
        title: 'Associate Software Engineer',
        date: 'July 2025 – Present',
        description: 'Worked on the platform team building scalable microservices and improving developer tooling.',
        projects: [
          {
            name: 'Payments Service Rewrite',
            description: 'Led the migration from a monolithic payments flow to an event-driven microservice, reducing latency by 40%.',
            tags: ['Java', 'Kafka', 'PostgreSQL'],
            caseStudy: {
              problem: 'The monolithic payments flow was a bottleneck — every downstream service waited on it, and a single failure caused cascading timeouts across the platform.',
              approach: 'Decomposed the flow into an event-driven microservice using Kafka. Each payment event was published asynchronously, allowing downstream consumers to process independently and retry without blocking.',
              outcome: 'End-to-end payment latency dropped by 40%. Fault isolation improved significantly — a downstream failure no longer stalled the entire pipeline.',
            },
          },
          {
            name: 'Internal CI/CD Dashboard',
            description: 'Built a real-time deployment visibility dashboard used by 50+ engineers daily.',
            tags: ['React', 'TypeScript', 'WebSockets'],
            caseStudy: {
              problem: 'Engineers had no single view of deployment status — they were checking multiple tools and Slack threads to understand what was live, causing slow incident response.',
              approach: 'Built a React dashboard that aggregated deployment events over WebSockets in real time. Each service showed current version, last deploy time, and pipeline status in one place.',
              outcome: 'Adopted by 50+ engineers within the first week. On-call response time for deployment-related incidents dropped noticeably as teams could immediately see what changed and when.',
            },
          },
        ],
      },
      {
        title: 'Software Engineering Intern',
        date: 'Jan 2025 – June 2025',
        description: 'Contributed to the core product as part of the frontend team.',
        projects: [
          {
            name: 'Onboarding Flow',
            description: 'Designed and built the user onboarding experience from scratch, improving activation rate by 25%.',
            tags: ['React', 'Node.js', 'MongoDB'],
            caseStudy: {
              problem: 'New users were dropping off within the first session — the product had no guided onboarding, leaving them to figure out core features on their own.',
              approach: 'Designed and built a multi-step onboarding flow that surfaced key actions progressively. Tracked completion per step to identify where users stalled and iterated on copy and sequencing.',
              outcome: 'Activation rate improved by 25% in the first month post-launch. The drop-off step shifted from step 1 to step 4, indicating users were getting meaningfully further into the product.',
            },
          },
        ],
      },
    ],
  },
];
