export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  type: "web" | "mobile";
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart system, and Stripe payment integration.",
    longDescription:
      "Built a complete e-commerce solution from the ground up featuring user authentication, product catalog with search and filtering, shopping cart with persistent state, and secure checkout powered by Stripe. The admin dashboard enables full product and order management.",
    type: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe", "Prisma"],
    imageUrl: "/projects/placeholder.svg",
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart with persistent state",
      "Stripe payment integration",
      "Admin dashboard for order management",
      "Responsive design across all devices",
    ],
  },
  {
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    description:
      "A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with real-time progress charts.",
    longDescription:
      "Developed a cross-platform mobile application that helps users track their fitness journey. Features include custom workout creation, nutrition logging with barcode scanning, goal setting with progress visualization, and social features for sharing achievements with friends.",
    type: "mobile",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase", "Chart.js"],
    imageUrl: "/projects/placeholder.svg",
    features: [
      "Custom workout builder with exercise library",
      "Nutrition tracking with barcode scanner",
      "Real-time progress charts and statistics",
      "Goal setting and achievement system",
      "Social features and friend challenges",
      "Push notifications for workout reminders",
    ],
  },
  {
    slug: "project-management-dashboard",
    title: "Project Management Dashboard",
    description:
      "A collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    longDescription:
      "Created a comprehensive project management dashboard that enables teams to collaborate effectively. Features Kanban-style boards with drag-and-drop, real-time updates via WebSockets, team workload analytics, and integrations with popular tools like GitHub and Slack.",
    type: "web",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
    imageUrl: "/projects/placeholder.svg",
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration via WebSockets",
      "Team workload and productivity analytics",
      "GitHub and Slack integrations",
      "File sharing and document management",
      "Role-based access control",
    ],
  },
  {
    slug: "food-delivery-app",
    title: "Food Delivery App",
    description:
      "A mobile app connecting users with local restaurants, featuring real-time order tracking and secure payments.",
    longDescription:
      "Built a food delivery mobile application that connects hungry users with local restaurants. Includes real-time GPS order tracking, secure in-app payments, restaurant rating and review system, and an intelligent recommendation engine based on user preferences.",
    type: "mobile",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API", "Stripe"],
    imageUrl: "/projects/placeholder.svg",
    features: [
      "Real-time GPS order tracking",
      "Secure in-app payment processing",
      "Restaurant discovery with filters",
      "Rating and review system",
      "Personalized recommendations",
      "Push notifications for order updates",
    ],
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "A web application that leverages AI to generate marketing copy, blog posts, and social media content.",
    longDescription:
      "Developed an AI-powered content generation platform that helps marketers and content creators produce high-quality written content. Users can generate blog posts, social media captions, email campaigns, and ad copy by providing simple prompts and selecting their desired tone and style.",
    type: "web",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Supabase", "Vercel"],
    imageUrl: "/projects/placeholder.svg",
    features: [
      "Multiple content type templates",
      "Customizable tone and style settings",
      "Content history and favorites",
      "Team collaboration workspace",
      "Export to multiple formats",
      "Usage analytics dashboard",
    ],
  },
  {
    slug: "budget-planner-app",
    title: "Budget Planner App",
    description:
      "A mobile app for personal finance management with expense tracking, budgets, and financial insights.",
    longDescription:
      "Created a personal finance mobile application that empowers users to take control of their spending. Features automatic transaction categorization, customizable budget categories, visual spending breakdowns, bill reminders, and monthly financial health reports.",
    type: "mobile",
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Plaid API", "D3.js"],
    imageUrl: "/projects/placeholder.svg",
    features: [
      "Automatic transaction categorization",
      "Customizable budget categories",
      "Visual spending breakdowns and charts",
      "Bill reminders and notifications",
      "Monthly financial health reports",
      "Bank account sync via Plaid",
    ],
  },
];
