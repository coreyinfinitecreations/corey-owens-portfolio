import { createClient } from "@sanity/client";
import "dotenv/config";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const projects = [
  {
    _id: "project-ecommerce-platform",
    _type: "project",
    title: "E-Commerce Platform",
    slug: { _type: "slug", current: "ecommerce-platform" },
    description:
      "A full-stack e-commerce platform with product management, cart system, and Stripe payment integration.",
    longDescription:
      "Built a complete e-commerce solution from the ground up featuring user authentication, product catalog with search and filtering, shopping cart with persistent state, and secure checkout powered by Stripe. The admin dashboard enables full product and order management.",
    projectType: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe", "Prisma"],
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart with persistent state",
      "Stripe payment integration",
      "Admin dashboard for order management",
      "Responsive design across all devices",
    ],
    order: 1,
  },
  {
    _id: "project-fitness-tracker-app",
    _type: "project",
    title: "Fitness Tracker App",
    slug: { _type: "slug", current: "fitness-tracker-app" },
    description:
      "A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with real-time progress charts.",
    longDescription:
      "Developed a cross-platform mobile application that helps users track their fitness journey. Features include custom workout creation, nutrition logging with barcode scanning, goal setting with progress visualization, and social features for sharing achievements with friends.",
    projectType: "mobile",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase", "Chart.js"],
    features: [
      "Custom workout builder with exercise library",
      "Nutrition tracking with barcode scanner",
      "Real-time progress charts and statistics",
      "Goal setting and achievement system",
      "Social features and friend challenges",
      "Push notifications for workout reminders",
    ],
    order: 2,
  },
  {
    _id: "project-project-management-dashboard",
    _type: "project",
    title: "Project Management Dashboard",
    slug: { _type: "slug", current: "project-management-dashboard" },
    description:
      "A collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    longDescription:
      "Created a comprehensive project management dashboard that enables teams to collaborate effectively. Features Kanban-style boards with drag-and-drop, real-time updates via WebSockets, team workload analytics, and integrations with popular tools like GitHub and Slack.",
    projectType: "web",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration via WebSockets",
      "Team workload and productivity analytics",
      "GitHub and Slack integrations",
      "File sharing and document management",
      "Role-based access control",
    ],
    order: 3,
  },
  {
    _id: "project-food-delivery-app",
    _type: "project",
    title: "Food Delivery App",
    slug: { _type: "slug", current: "food-delivery-app" },
    description:
      "A mobile app connecting users with local restaurants, featuring real-time order tracking and secure payments.",
    longDescription:
      "Built a food delivery mobile application that connects hungry users with local restaurants. Includes real-time GPS order tracking, secure in-app payments, restaurant rating and review system, and an intelligent recommendation engine based on user preferences.",
    projectType: "mobile",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API", "Stripe"],
    features: [
      "Real-time GPS order tracking",
      "Secure in-app payment processing",
      "Restaurant discovery with filters",
      "Rating and review system",
      "Personalized recommendations",
      "Push notifications for order updates",
    ],
    order: 4,
  },
  {
    _id: "project-ai-content-generator",
    _type: "project",
    title: "AI Content Generator",
    slug: { _type: "slug", current: "ai-content-generator" },
    description:
      "A web application that leverages AI to generate marketing copy, blog posts, and social media content.",
    longDescription:
      "Developed an AI-powered content generation platform that helps marketers and content creators produce high-quality written content. Users can generate blog posts, social media captions, email campaigns, and ad copy by providing simple prompts and selecting their desired tone and style.",
    projectType: "web",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Supabase", "Vercel"],
    features: [
      "Multiple content type templates",
      "Customizable tone and style settings",
      "Content history and favorites",
      "Team collaboration workspace",
      "Export to multiple formats",
      "Usage analytics dashboard",
    ],
    order: 5,
  },
  {
    _id: "project-budget-planner-app",
    _type: "project",
    title: "Budget Planner App",
    slug: { _type: "slug", current: "budget-planner-app" },
    description:
      "A mobile app for personal finance management with expense tracking, budgets, and financial insights.",
    longDescription:
      "Created a personal finance mobile application that empowers users to take control of their spending. Features automatic transaction categorization, customizable budget categories, visual spending breakdowns, bill reminders, and monthly financial health reports.",
    projectType: "mobile",
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Plaid API", "D3.js"],
    features: [
      "Automatic transaction categorization",
      "Customizable budget categories",
      "Visual spending breakdowns and charts",
      "Bill reminders and notifications",
      "Monthly financial health reports",
      "Bank account sync via Plaid",
    ],
    order: 6,
  },
];

const about = {
  _id: "about-singleton",
  _type: "about",
  heading: "About Me",
  whoIAm:
    "I'm a passionate full-stack developer specializing in building exceptional web and mobile applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I create products that are both functional and beautiful.",
  whatIDo:
    "From responsive websites to cross-platform mobile apps, I deliver end-to-end solutions. I focus on writing clean, maintainable code and building intuitive user interfaces that solve real problems for real people.",
  stats: [
    { _key: "stat1", value: "3+", label: "Years Experience" },
    { _key: "stat2", value: "20+", label: "Projects Completed" },
    { _key: "stat3", value: "10+", label: "Technologies" },
    { _key: "stat4", value: "100%", label: "Client Satisfaction" },
  ],
};

const skillCategories = [
  {
    _id: "skill-frontend",
    _type: "skillCategory",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
    order: 1,
  },
  {
    _id: "skill-mobile",
    _type: "skillCategory",
    title: "Mobile",
    skills: ["React Native", "Expo", "iOS", "Android", "Flutter"],
    order: 2,
  },
  {
    _id: "skill-backend",
    _type: "skillCategory",
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    order: 3,
  },
  {
    _id: "skill-tools",
    _type: "skillCategory",
    title: "Tools & Other",
    skills: ["Git", "Docker", "Vercel", "Firebase", "Figma", "CI/CD"],
    order: 4,
  },
];

const books = [
  {
    _id: "book-clean-code",
    _type: "book",
    title: "Clean Code",
    author: "Robert C. Martin",
    status: "finished",
    review: "A must-read for any developer. Changed how I think about writing maintainable code.",
    rating: 5,
    order: 1,
  },
  {
    _id: "book-pragmatic-programmer",
    _type: "book",
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    status: "finished",
    review: "Full of practical advice that stands the test of time. Highly recommend.",
    rating: 5,
    order: 2,
  },
  {
    _id: "book-ddia",
    _type: "book",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    status: "reading",
    review: "Deep dive into distributed systems and data architecture. Dense but incredibly valuable.",
    order: 3,
  },
  {
    _id: "book-atomic-habits",
    _type: "book",
    title: "Atomic Habits",
    author: "James Clear",
    status: "finished",
    review: "Great framework for building better habits. Applies well to coding discipline too.",
    rating: 4,
    order: 4,
  },
];

async function seed() {
  console.log("Seeding Sanity...\n");

  const allDocs = [...projects, about, ...skillCategories, ...books];

  const transaction = client.transaction();
  for (const doc of allDocs) {
    transaction.createOrReplace(doc);
  }

  const result = await transaction.commit();
  console.log(`Created/updated ${allDocs.length} documents.`);
  console.log(`Transaction ID: ${result.transactionId}`);
  console.log("\nDone! Visit http://localhost:3000/studio to see your content.");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
