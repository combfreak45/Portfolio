export const experienceData = [
  {
    company: "SAP Labs",
    roles: [
      {
        title: "Developer Fellowship ",
        date: "March 2026 – Present",
        description:
          "Worked as full stack developer on Innovation Team at MD Office SAP Labs, Bangalore.",
        projects: [
          {
            name: "SAP NextGen Hiring",
            slug: "sap-nextgen-hiring",
            description: [
              "Enterprise hiring platform on SAP BTP streamlining end-to-end recruitment workflows for hiring managers, recruiters, and admins",
              "Integrated AI chat assistant (Claude via SAP AI Core) with SSE streaming, two-stage LLM classifier, and natural language role/BU management",
              "Implemented fine-grained RBAC via SAP XSUAA, Redis-backed per-user token rate limiting, and BTP Audit Log compliance using outbox pattern",
              "Built demand planning workflows with state machine logic, email-based HM onboarding via SendGrid, and modular AI tool registry",
            ],
            tags: [
              "Node.js",
              "Express.js",
              "React",
              "React Router v6",
              "MUI (Material UI)",
              "Axios",
              "SAP CAP (CDS)",
              "SAP XSUAA",
              "SAP AI Core",
              "SAP BTP",
              "Redis",
              "SendGrid",
              "SQLite",
              "Jest",
              "Swagger/OpenAPI",
              "MTA",
            ],
          },
          {
            name: "SAP Mentoring Platform",
            slug: "sap-mentoring-platform",
            description: [
              "Built a full-stack SAP BTP mentoring platform using React 18, Node.js, and Express, enabling mentor-mentee matching for SAP CSR volunteers and external students",
              "Implemented SAP IAS (Identity Authentication Service) OIDC JWT authentication replacing XSUAA, supporting three personas: Mentee, Mentor, and Admin",
              "Designed a weighted scoring matching engine in Node.js that auto-computes mentor-mentee compatibility based on language, course, state, and mother tongue",
              "Modeled domain schema using SAP CAP CDS with HANA Cloud, managing program lifecycle and application state machines via Flyway-style SQL migrations",
              "Developed React frontend  Material UI, and Zustand for dynamic role-filtered navigation across 12+ views for three distinct user roles",
              "Deployed multi-environment (dev/test/prod) application on SAP BTP Cloud Foundry using MTA deployment descriptors with SAP AppRouter and IAS integration",
              "Set up CI/CD pipeline with GitHub Actions including unit and component test suites with 70%+ coverage target",
            ],
            tags: [
              "Node.js",
              "Express",
              "SAP CAP CDS",
              "HANA Cloud",
              "JWT",
              "Jest",
              "React 18",
              "Material UI",
              "Zustand",
              "SAP AppRouter",
              "SAP IAS",
              "SAP BTP Cloud Foundry",
              "MTA",
              "BTP Audit Log",
              "GitHub Actions",
            ],
          },
        ],
      },
      {
        title: "Associate Application Engineer",
        date: "July 2025 – Present",
        description:
          "Worked as part of SuccessFactor WEF Team on microservice applications",
        projects: [
          {
            name: "Benefits",
            slug: "benefits",
            description: [],
            tags: [],
          },
          {
            name: "AdminX",
            slug: "adminx",
            description: [],
            tags: [],
          },
          {
            name: "Smart Recruiters",
            slug: "smart-recruiters",
            description: [],
            tags: [],
          },
          {
            name: "Winston AI Agent",
            slug: "winston-ai-agent",
            description: [],
            tags: [],
          },
        ],
      },
      {
        title: "Software Engineering Intern",
        date: "Jan 2025 – June 2025",
        description:
          "Worked as part of SuccessFactor WEF Team on microservice applications",
        projects: [
          {
            name: "UXR Workbench",
            slug: "uxr-workbench",
            description: [],
            tags: [],
          },
          {
            name: "Candidate Experience",
            slug: "candidate-experience",
            description: [],
            tags: [],
          },
          {
            name: "Recruiting Monolith",
            slug: "recruiting-monolith",
            description: [],
            tags: [],
          },
        ],
      },
      {
        title: "Software Engineering Summer Intern",
        date: "May 2024 – July 2024",
        description:
          "Worked as part of Smart Labs Team",
        projects: [
          {
            name: "Giveaway Management System",
            slug: "giveaway-management-system",
            description: [],
            tags: [],
          },
        ],
      },
    ],
  },
];
