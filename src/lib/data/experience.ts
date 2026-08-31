export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "MTMGroup",
    role: "Sr. Frontend Developer · Contractor",
    start: "Oct 2025",
    end: "Aug 2026",
    bullets: [
      "Developing and maintaining 4 online casino brands (SpinBet, SpinBit, Casiny, VegaStars).",
      "Building reusable UI components using Atomic Design, documented in Storybook.",
      "Delivering core casino modules: wallet, cashier, VIP, referral, and tournaments.",
      "Integrating REST APIs and real-time features (Pusher) with i18n and WCAG 2.1 AA support.",
    ],
    tech: [
      "nextdotjs",
      "react",
      "typescript",
      "mui",
      "framer",
      "storybook",
      "redis",
      "sentry",
      "grafana",
    ],
  },
  {
    company: "ERNI Philippines · Collins Aerospace",
    role: "Sr. Frontend Developer",
    start: "Nov 2024",
    end: "Oct 2025",
    bullets: [
      "Built UI and API integrations for tracking IATA-compliant TYPE B aviation messages.",
      "Delivered CMS for country-specific message management with notifications.",
      "Implemented circle-of-trust access controls for message viewing and editing.",
      "Wrote automated tests and backend APIs in Python, and reviewed PRs across the team.",
    ],
    tech: ["nextdotjs", "typescript", "python", "aws", "gitlab"],
  },
  {
    company: "Independent Consultant",
    role: "FullStack Developer",
    start: "Aug 2024",
    end: "Nov 2024",
    bullets: [
      "Built online games site, business landing pages, and web portals for local clients.",
      "Led payment integrations with USDT, Dragonpay, GCash, and PayMaya.",
      "Developed serverless microservices APIs for seamless partner integrations.",
    ],
    tech: [
      "nextdotjs",
      "react",
      "typescript",
      "nestjs",
      "express",
      "postgresql",
      "mongodb",
      "mysql",
      "aws",
      "heroku",
    ],
  },
  {
    company: "Racing Victoria Australia",
    role: "Sr. FullStack Developer",
    start: "Aug 2023",
    end: "Jul 2024",
    bullets: [
      "Built the MRED and PRP portals from scratch to track thoroughbred health records.",
      "Developed and maintained microservice APIs with GraphQL.",
      "Managed SEO, Google Analytics, and reviewed pull requests across the team.",
    ],
    tech: [
      "nextdotjs",
      "react",
      "typescript",
      "nodedotjs",
      "graphql",
      "postgresql",
      "jenkins",
      "docker",
      "aws",
    ],
  },
  {
    company: "DHL Malaysia",
    role: "Sr. Software Engineer",
    start: "Oct 2022",
    end: "Jul 2023",
    bullets: [
      "Developed and maintained microservice APIs.",
      "Performed Excel data transformations using SQL Server and Visual Studio SSIS.",
      "Uploaded and served processed data through Heroku infrastructure.",
    ],
    tech: [
      "nodedotjs",
      "nestjs",
      "postgresql",
      "sql",
      "docker",
      "heroku",
    ],
  },
  {
    company: "CIS Bayad Center",
    role: "Sr. FullStack Developer",
    start: "Mar 2022",
    end: "Nov 2022",
    bullets: [
      "Built the Kabahagi Admin portal to manage payments and employee allowances.",
      "Developed serverless AWS-based backends (Lambda, EventBridge, Cognito, QLDB).",
    ],
    tech: [
      "nodedotjs",
      "react",
      "typescript",
      "mongodb",
      "mysql",
      "aws",
    ],
  },
  {
    company: "Lamudi Tech Corp",
    role: "Web Developer",
    start: "Oct 2020",
    end: "Jan 2022",
    bullets: [
      "Built custom CMS websites (Bolt CMS) for clients in Indonesia, Philippines and Mexico.",
      "Developed Symfony-based internal tools and integrated third-party APIs.",
      "Implemented SEO, GTM, Analytics, and handled AWS EC2 / S3 deployment.",
    ],
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    company: "Pragmaprime",
    role: "Part-time Web Developer",
    start: "Aug 2020",
    end: "Dec 2020",
    bullets: ["Built e-commerce UI with Vue/Nuxt and Lumen backend."],
    tech: ["vuedotjs", "nuxt", "php"],
  },
  {
    company: "Redcore IT Solutions",
    role: "Laravel Developer · Project-based",
    start: "Aug 2019",
    end: "Feb 2020",
    bullets: ["Developed and maintained client portals using Laravel and Vue."],
    tech: ["laravel", "vuedotjs", "php", "mysql", "aws"],
  },
  {
    company: "Dragonpay",
    role: "Junior Programmer",
    start: "Feb 2019",
    end: "Aug 2019",
    bullets: [
      "Built internal/external software applications.",
      "Assisted merchants integrating with the Dragonpay system.",
      "Administered Dragonpay system infrastructure.",
    ],
    tech: ["laravel", "php", "mysql"],
  },
  {
    company: "DirectWithHotels",
    role: "Associate Software Engineer",
    start: "Aug 2018",
    end: "Jan 2019",
    bullets: ["Developed and maintained the Booking Website Portal."],
    tech: ["laravel", "vuedotjs", "php", "postgresql"],
  },
];
