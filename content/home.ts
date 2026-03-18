// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... all type definitions remain unchanged ...

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "CRM",
    badgeOuter: "New for 2024",
    titleBefore: "",
    titleHighlight: "Close More Deals, Effortlessly",
    titleAfter: "",
    subtitle:
      "LeadSync helps your team track leads, manage contacts, and grow your pipeline—all in one simple CRM.",
    primaryCta: { label: "Get Started", href: "/auth#signup" },
    secondaryCta: { label: "Book a Demo", href: "/#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadSync CRM dashboard preview",
  },

  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  benefits: {
    eyebrow: "Why LeadSync",
    heading: "A modern CRM for small teams",
    description:
      "LeadSync is built for sales teams who want to centralize leads, streamline deal flow, and close more business with less busywork.",
    items: [
      {
        icon: "Blocks",
        title: "All Your Leads in One Place",
        description: "Easily capture, organize, and prioritize every opportunity.",
      },
      {
        icon: "LineChart",
        title: "Powerful Pipeline Management",
        description: "Visualize your sales funnel and move deals forward with ease.",
      },
      {
        icon: "Users",
        title: "Collaborate and Win Together",
        description: "Assign leads, share notes, and keep everyone on the same page.",
      },
      {
        icon: "Sparkle",
        title: "Simple, Intuitive Interface",
        description: "No training required. Your team will love how easy it is to get started.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "Everything you need to grow sales",
    subtitle:
      "From your first lead to closing the biggest deal, LeadSync gives your team the clarity and control to win more business.",
    items: [
      { icon: "Notebook", title: "Lead & Contact Management", description: "Capture, track, and update every relationship without losing context." },
      { icon: "BarChart", title: "Pipeline Overview", description: "See deal stages, forecast revenue, and optimize sales priorities." },
      { icon: "Users", title: "Team Collaboration", description: "Assign, comment, and mention teammates to keep work moving." },
      { icon: "Calendar", title: "Activity Tracking", description: "Log calls, emails, and meetings directly on lead or deal records." },
      { icon: "Mail", title: "Integrations", description: "Sync email and calendar for a complete sales workflow." },
      { icon: "PieChart", title: "Actionable Insights", description: "Analyze win rates, deal cycles, and team performance." },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Everything you need, nothing you don’t",
    subtitle:
      "The CRM small teams love: reliable, fast, and focused on sales—without the clutter.",
    items: [
      { title: "Fast Setup", description: "Start tracking leads in minutes, not weeks.", pro: false },
      { title: "Mobile Friendly", description: "Works beautifully on any device.", pro: false },
      { title: "Secure & Private", description: "Enterprise-grade protection for your data.", pro: false },
      { title: "Personal Support", description: "Get help directly from our product team.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "What Teams Say",
    heading: "What Teams Say About LeadSync",
    reviews: [
      { image: "/demo-img.jpg", name: "Sarah Fields", role: "Sales Lead, Growthly", comment: "Moving to LeadSync made our team twice as productive. We never lose track of a deal anymore.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "James Chen", role: "Founder, SnapSales", comment: "The interface is so clean and simple — my team ramped up in hours, not days.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Olivia Jones", role: "Manager, RocketStart", comment: "No more spreadsheets! LeadSync lets me see everything in one dashboard.", rating: 4.8 },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the LeadSync Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder", "CEO"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/adan-asim" },
        ],
      },
      // Add more as needed, you can expand this for LeadSync as the team grows
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, Transparent Pricing",
    subtitle: "Start for free, grow when you need more. No hidden fees or contracts.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "All the essentials for growing teams.",
        buttonText: "Start for free",
        benefits: [
          "Unlimited leads & contacts",
          "Full pipeline view",
          "Activity logging",
          "Email support",
        ],
      },
      {
        title: "Pro",
        popular: true,
        price: 29,
        description: "For teams ready to scale their sales.",
        buttonText: "Start 14-day trial",
        benefits: [
          "Everything in Starter",
          "Team collaboration features",
          "Integrations (email, calendar)",
          "Priority support",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 99,
        description: "For larger organizations with complex workflows.",
        buttonText: "Contact sales",
        benefits: [
          "Custom integrations",
          "Dedicated onboarding",
          "Personal account manager",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Contact the LeadSync Team",
    description:
      "Have a question, need help, or want a personal demo? Our team is here to help.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "Hours", value: ["Mon-Fri", "9AM - 6PM"] },
    },
    formSubjects: [
      "General Inquiry",
      "Book a Demo",
      "Partnership",
      "Support",
      "Other",
    ],
    formSubmitLabel: "Send Message",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Is LeadSync free to start with?", answer: "Yes! You can start tracking your sales for free and upgrade as your team grows." },
      { question: "Can I import my contacts?", answer: "Absolutely. Import from CSV or sync with your existing tools." },
      { question: "Does LeadSync work for remote teams?", answer: "Yes—LeadSync is built to keep distributed teams in sync, wherever you work." },
      { question: "What integrations are available?", answer: "Email and calendar integrations are supported, with more coming soon." },
      { question: "Is my data secure?", answer: "Yes. We use enterprise-grade encryption and never sell your data." },
    ],
  },

  footer: {
    brandName: "LeadSync",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" }
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} LeadSync. All rights reserved.`,
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "LeadSync",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "LeadSync CRM preview" },
    features: [
      { title: "Lead Management", description: "Keep all leads organized in one place." },
      { title: "Contact Tracking", description: "Store and update important sales contacts." },
      { title: "Deal Pipeline", description: "Visualize and move deals through the funnel." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://nextjs.org/docs", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}