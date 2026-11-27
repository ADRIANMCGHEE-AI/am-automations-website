import type { Metadata } from "next";
export const site = {
  name: "AM Automations",
  founder: "Adrian McGhee",
  location: "Greater Manchester",
  email: "adrian@adrianmcgheeautomations.com",
  whatsappDisplay: "07867 374905",
  whatsappDigits: "447867374905",
  whatsappMessage: "Hi Adrian, I'd like to discuss a process in my business.",
  origin: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://adrianmcgheeautomations.com"
  ).replace(/\/$/, ""),
  description:
    "Websites, quotation follow-ups and connected systems for UK businesses. Practical automation from a Greater Manchester sales and operations specialist.",
};
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/adrian-mcghee-automations/",
  },
  { label: "X", href: "https://x.com/AdrianMcgheeAI" },
] as const;
export const whatsappUrl = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "For Merchants", href: "/builders-merchants" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const services = [
  {
    id: "business-process",
    title: "Business Process Automation",
    short: "Spend less time repeating the same tasks.",
    description:
      "Move routine data entry, document handling and internal notifications through a clear, agreed workflow.",
    when: "Useful when the same information is copied between places, or routine tasks depend on someone remembering every step.",
    responsibility:
      "Your team agrees the rules, checks exceptions and keeps control of decisions that need a person.",
    examples: [
      "Routine data transfers",
      "Document workflows",
      "Internal coordination",
    ],
    demo: null,
  },
  {
    id: "quotation-follow-ups",
    title: "Quotation & Sales Follow-Up Automation",
    short: "Give outstanding quotations a clear next step.",
    description:
      "Schedule personalised reminders, track outstanding opportunities and stop unnecessary follow-ups when a customer responds.",
    when: "Useful when quotations leave the inbox and follow-up relies on a diary note, a spreadsheet or memory.",
    responsibility:
      "You approve the messages, timing and stop rules. Your team handles replies and commercial decisions.",
    examples: [
      "Scheduled email sequences",
      "Reply-aware follow-ups",
      "Quotation status tracking",
    ],
    demo: "automated-follow-ups",
  },
  {
    id: "customer-support",
    title: "AI Customer Support",
    short: "Make repeat questions easier to handle.",
    description:
      "Help customers find approved information, navigate products and reach the right person when their question needs human judgement.",
    when: "Useful when recurring questions interrupt the team or customers struggle to find information already available.",
    responsibility:
      "Your business approves the knowledge and boundaries. Sensitive questions and uncertain answers are passed to a person.",
    examples: [
      "Website assistants",
      "Approved product guidance",
      "Human escalation",
    ],
    demo: null,
  },
  {
    id: "systems-integration",
    title: "Systems Integration",
    short: "Keep information moving between your tools.",
    description:
      "Assess how your email, spreadsheets, CRM, website and stock systems could share the information your team needs.",
    when: "Useful when a change in one system has to be re-entered in another, or teams work from different versions of the same information.",
    responsibility:
      "Compatibility and access are checked first. Your team remains responsible for the source data and agreed exception handling.",
    examples: [
      "CRM and email connections",
      "Spreadsheet workflows",
      "Product data synchronisation",
    ],
    demo: null,
  },
  {
    id: "websites-ecommerce",
    title: "Websites & E-Commerce Automation",
    short: "Make it easier for customers to find and buy.",
    description:
      "Build clear websites and online buying experiences, then connect suitable parts of sales, service and product administration.",
    when: "Useful when customers need to call for basic product information, or the online experience makes choosing the next step difficult.",
    responsibility:
      "You approve product information and trading rules. Payments, live stock and operational connections are scoped and tested separately.",
    examples: [
      "Trade e-commerce",
      "Connected enquiries",
      "Product and stock workflows",
    ],
    demo: "northstone",
  },
  {
    id: "custom-solutions",
    title: "Custom Automation Solutions",
    short: "Start with the bottleneck, even without a brief.",
    description:
      "Examine the process, consider the tools already available and design a practical solution around the work.",
    when: "Useful when you know where time is being lost but do not yet know whether you need a workflow, an integration or a small business tool.",
    responsibility:
      "The first step is understanding the problem and agreeing a scope, rather than committing to a particular technology.",
    examples: [
      "Process discovery",
      "Tailored workflow design",
      "Purpose-built business tools",
    ],
    demo: null,
  },
];
export const outcomes = [
  {
    title: "Follow up sales opportunities",
    description:
      "Give quotations a consistent follow-up, with clear rules for timing, replies and the next step.",
    href: "/services#quotation-follow-ups",
    detail: "Quotation reminders · Reply handling · Status updates",
  },
  {
    title: "Reduce repetitive administration",
    description:
      "Move information between the right tools and reduce the routine work your team repeats.",
    href: "/services#business-process",
    detail: "Data transfers · Document workflows · System connections",
  },
  {
    title: "Improve online buying and support",
    description:
      "Help customers explore products, find useful information and reach the right place.",
    href: "/services#websites-ecommerce",
    detail: "Websites · Trade e-commerce · Customer guidance",
  },
];
export const processSteps = [
  [
    "Understand",
    "Describe the current process, the tools involved and where work gets held up.",
  ],
  [
    "Agree the scope",
    "Set out the proposed workflow, responsibilities, price and delivery plan before building.",
  ],
  [
    "Build and test",
    "Review the implementation against agreed examples, including replies, failures and exceptions.",
  ],
  [
    "Handover",
    "Walk through how it works, provide useful guidance and agree any ongoing support separately.",
  ],
];
export const faqs = [
  {
    question: "What does a project cost?",
    answer:
      "Projects are priced around the process, the tools involved and the work needed. After understanding the problem, we agree a written scope and price before implementation. Start by describing one task; you do not need a technical brief.",
  },
  {
    question: "Will there be monthly charges?",
    answer:
      "Implementation and ongoing costs are explained separately. Depending on the solution, there may be third-party software, hosting or usage charges. Maintenance or ongoing support is agreed separately, so you can see what you are paying for.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Timing depends on the scope, system access, available content and the testing needed. A delivery plan is agreed after discovery. The aim is a realistic schedule with clear review points, rather than promising a date before understanding the work.",
  },
  {
    question: "Can you work with the tools we already use?",
    answer:
      "That is the starting point. We assess compatibility, available integrations and access before recommending a solution. If an existing tool or a simpler change can solve the problem, that is considered first.",
  },
  {
    question: "Who owns the accounts and finished system?",
    answer:
      "Ownership, account access and handover are set out in the written scope. Wherever practical, business accounts are held by your business. Any third-party subscriptions, licences and dependencies are identified before you commit.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The handover explains how to use the system, what to check and how exceptions are handled. Any monitoring, maintenance, improvements or ongoing support are scoped separately, with responsibilities made clear.",
  },
  {
    question: "Can we start with one process?",
    answer:
      "Yes. A clearly defined first process is a sensible starting point. We agree what success looks like, test it with your team and use what we learn to decide whether any further work is worthwhile.",
  },
];
export const enquiryTopics = [
  { id: "general", label: "A process in my business" },
  ...services.map((s) => ({ id: s.id, label: s.title })),
  {
    id: "automated-follow-ups",
    label: "The quotation follow-up demonstration",
  },
  { id: "northstone", label: "The Northstone merchant demonstration" },
  {
    id: "builders-merchants",
    label: "A website or connected system for my merchant business",
  },
];
export function contactHref(interest = "general") {
  return `/contact/?interest=${encodeURIComponent(interest)}`;
}
export function contactLinks(interest: string) {
  const topic =
    enquiryTopics.find((t) => t.id === interest) || enquiryTopics[0];
  const specific = topic.id !== "general";
  const subject = specific
    ? `AM Automations — ${topic.label}`
    : "AM Automations enquiry";
  const message = specific
    ? `Hi Adrian, I'd like to discuss ${topic.label.toLowerCase()} for my business.`
    : site.whatsappMessage;
  return {
    topic,
    email: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nThe task I want to improve:\nThe tools we currently use:\nWhat I would like to happen:\n")}`,
    whatsapp: `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`,
  };
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${site.origin}${path}/`;
  const images = [
    {
      url: "/branding/share.jpg",
      width: 1200,
      height: 630,
      alt: "AM Automations — Websites, quotation follow-ups and connected business systems",
    },
  ];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      siteName: site.name,
      type: "website",
      locale: "en_GB",
      images,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images,
    },
  };
}
