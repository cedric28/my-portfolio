export type Project = {
  id: string;
  title: string;
  company: string;
  url: string;
  description: string;
  tech: string[]; // slugs matching techStack
};

export const projects: Project[] = [
  // MTMGroup - Casino brands
  {
    id: "vegastars",
    title: "VegaStars",
    company: "MTMGroup",
    url: "https://vegastars.com/",
    description:
      "Online casino platform with wallet, cashier, VIP, referrals, and tournaments.",
    tech: ["nextdotjs", "react", "typescript", "mui", "storybook", "framer"],
  },
  {
    id: "spinbet",
    title: "SpinBet",
    company: "MTMGroup",
    url: "https://www.spinbet.com",
    description:
      "Casino brand with real-time gameplay features and CMS-driven content.",
    tech: ["nextdotjs", "react", "typescript", "mui", "storybook", "framer"],
  },
  {
    id: "spinbit",
    title: "SpinBit",
    company: "MTMGroup",
    url: "https://www.spinbit.com",
    description:
      "Multi-language casino site with atomic-designed UI components.",
    tech: ["nextdotjs", "react", "typescript", "mui", "storybook", "framer"],
  },
  {
    id: "casiny",
    title: "Casiny",
    company: "MTMGroup",
    url: "https://www.casiny.com",
    description:
      "Casino brand featuring rewards, cashier, and real-time updates via Pusher.",
    tech: ["nextdotjs", "react", "typescript", "mui", "storybook", "framer"],
  },

  // Collins Aerospace via ERNI
  {
    id: "collins-demo",
    title: "Collins Cargo Connect — Demo",
    company: "ERNI · Collins Aerospace",
    url: "https://collinscargoconnect.com/login",
    description:
      "IATA-compliant TYPE B aviation message tracker with circle-of-trust access controls.",
    tech: ["nextdotjs", "typescript", "python", "aws", "gitlab"],
  },
  {
    id: "collins-cms",
    title: "Collins Cargo Connect — CMS",
    company: "ERNI · Collins Aerospace",
    url: "https://cms.collinscargoconnect.com/login",
    description:
      "Admin CMS for managing country-specific messages under the circle of trust.",
    tech: ["nextdotjs", "typescript", "python", "aws", "gitlab"],
  },

  // Independent Consultant / freelance
  {
    id: "zen-ritchie",
    title: "Zen Ritchie",
    company: "Independent Consultant",
    url: "https://zen-ritchie-cd93b3.netlify.app",
    description: "Business landing page with responsive UI/UX design.",
    tech: ["nextdotjs", "react", "typescript", "tailwindcss"],
  },
  {
    id: "1of1m",
    title: "1of1M",
    company: "Independent Consultant",
    url: "https://1of1m.netlify.app",
    description:
      "Online games site with crypto (USDT), Dragonpay, GCash and PayMaya integrations.",
    tech: [
      "nextdotjs",
      "react",
      "typescript",
      "nestjs",
      "postgresql",
      "aws",
    ],
  },
  {
    id: "gemstar",
    title: "Gemstar Engineering Services",
    company: "Independent Consultant",
    url: "https://gemstar-engineering-services.netlify.app/",
    description: "Business landing page for an engineering services company.",
    tech: ["nextdotjs", "react", "typescript", "tailwindcss"],
  },
  {
    id: "gbjp-fun",
    title: "GBJP Fun",
    company: "Independent Consultant",
    url: "https://gbjp-fun.netlify.app/",
    description: "Interactive fun/entertainment site with responsive UI.",
    tech: ["nextdotjs", "react", "typescript", "tailwindcss"],
  },

  // Racing Victoria Australia
  {
    id: "ott",
    title: "OTT Community",
    company: "Racing Victoria",
    url: "https://www.ottcommunity.com.au/",
    description:
      "Community platform for off-the-track thoroughbreds with SEO and analytics.",
    tech: [
      "nextdotjs",
      "react",
      "typescript",
      "graphql",
      "postgresql",
      "aws",
      "docker",
    ],
  },
  {
    id: "hmp",
    title: "HMP — Racing Victoria",
    company: "Racing Victoria",
    url: "https://hmp.racingvictoria.com.au/",
    description:
      "MRED and PRP portals tracking horse health records before, during, and after racing.",
    tech: [
      "nextdotjs",
      "react",
      "typescript",
      "graphql",
      "postgresql",
      "jenkins",
      "docker",
    ],
  },

  // Lamudi Tech Corp properties
  {
    id: "propertypro",
    title: "PropertyPro",
    company: "Lamudi Tech Corp",
    url: "https://www.propertypro.co.id/project/48",
    description:
      "Custom Bolt CMS property listing site for the Indonesian market.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    id: "grahamirai",
    title: "Graha Mirai",
    company: "Lamudi Tech Corp",
    url: "https://www.grahamirai.co.id/",
    description: "Real estate developer site built with Bolt CMS.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    id: "edenhaus",
    title: "Edenhaus",
    company: "Lamudi Tech Corp",
    url: "https://www.edenhaus.id/id",
    description: "Property developer website with CMS-driven content.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    id: "happyliving",
    title: "Happy Living Realty",
    company: "Lamudi Tech Corp",
    url: "https://www.happylivingrealty.com/en",
    description: "Multi-language real estate site.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    id: "metlandmenteng",
    title: "Metland Menteng",
    company: "Lamudi Tech Corp",
    url: "https://metlandmenteng.co.id/id",
    description: "Residential development marketing site.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    id: "aerium",
    title: "Aerium Residences",
    company: "Lamudi Tech Corp",
    url: "https://aerium-residences.com/",
    description: "Luxury residential project site with rich media.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    id: "podomorodeli",
    title: "Podomoro City Deli Medan",
    company: "Lamudi Tech Corp",
    url: "https://www.podomorocitydelimedan.com/id",
    description: "Township development website with property listings.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
  {
    id: "theloggia",
    title: "The Loggia",
    company: "Lamudi Tech Corp",
    url: "https://theloggia.lamudi-dev.ninja/en",
    description: "Residential project landing page.",
    tech: ["symfony", "php", "mysql", "docker"],
  },
  {
    id: "metlandtambun",
    title: "Metland Tambun",
    company: "Lamudi Tech Corp",
    url: "https://metland-tambun.lamudi-dev.ninja/id",
    description: "Residential development site.",
    tech: ["symfony", "php", "mysql", "docker"],
  },
  {
    id: "podomorovr",
    title: "Podomoro City VR",
    company: "Lamudi Tech Corp",
    url: "https://podomorocityvr.lamudi-dev.ninja/",
    description: "Virtual reality-enhanced property showcase site.",
    tech: ["symfony", "php", "mysql", "docker"],
  },
  {
    id: "agungsedayu",
    title: "Agung Sedayu",
    company: "Lamudi Tech Corp",
    url: "https://www.agungsedayu.com/en/",
    description: "Corporate real estate developer website.",
    tech: ["symfony", "php", "mysql", "docker", "aws"],
  },
];

export const projectsByCompany = projects.reduce<Record<string, Project[]>>(
  (acc, p) => {
    (acc[p.company] ||= []).push(p);
    return acc;
  },
  {},
);
