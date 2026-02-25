export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQTab {
  id: string;
  label: string;
  items: FAQItem[];
}

export const FAQ_TABS: FAQTab[] = [
  {
    id: "about",
    label: "About the Service",
    items: [
      {
        id: "about-1",
        question: "What is Guided Home Buying? How does it work?",
        answer:
          "Guided Home Buying is our end-to-end service where we help you find, evaluate, and purchase the right property. We combine market research, site visits, and expert guidance so you can decide with confidence.",
      },
      {
        id: "about-2",
        question: "Will you assist with negotiations?",
        answer:
          "Yes. We help you negotiate with builders and sellers so you get a fair price and clear terms, and we support you through the process.",
      },
      {
        id: "about-3",
        question: "I am confused looking at various options, how can this service help?",
        answer:
          "We shortlist options based on your budget, location, and preferences, and explain pros and cons in simple terms so you can compare and choose without overwhelm.",
      },
      {
        id: "about-4",
        question: "What are the timelines?",
        answer:
          "Timelines depend on your readiness and market availability. We’ll give you a clear roadmap from search to closure once we understand your requirements.",
      },
      {
        id: "about-5",
        question: "Do you also assist with home loans, taxation & legal matters?",
        answer:
          "We connect you with trusted partners for home loans, tax planning, and legal checks, and can coordinate so your purchase stays on track.",
      },
      {
        id: "about-6",
        question: "What kind of properties will you recommend?",
        answer:
          "We recommend properties that match your budget, location, and lifestyle—including under-construction and ready-to-move options from verified developers.",
      },
      {
        id: "about-7",
        question: "Will you also help me buy individual / standalone houses?",
        answer:
          "Yes. We can help with both apartments and individual/standalone houses, depending on availability and your preference.",
      },
      {
        id: "about-8",
        question:
          "Will you directly liaise with the builder for the deal, or is there a third party involved?",
        answer:
          "We liaise directly with builders and authorised channels where possible, and we’re transparent about any third parties involved in a specific project.",
      },
      {
        id: "about-9",
        question: "How many properties can I visit with you?",
        answer:
          "There’s no fixed limit. We schedule visits based on your shortlist and availability until you find the right fit.",
      },
      {
        id: "about-10",
        question: "What happens if I have already seen or visited a few properties?",
        answer:
          "We factor in what you’ve already seen, avoid duplication, and build on that to expand or refine your shortlist as needed.",
      },
      {
        id: "about-11",
        question: "Does someone physically travel to the property to analyse them?",
        answer:
          "Yes. Our team visits shortlisted properties to assess quality, location, and builder track record so you get verified insights.",
      },
      {
        id: "about-12",
        question: "What kind of questions will I get answers to during the process?",
        answer:
          "You’ll get answers on pricing, construction quality, developer reputation, legal status, timelines, resale potential, and anything else that affects your decision.",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees",
    items: [
      {
        id: "fees-1",
        question: "How are your fees structured?",
        answer:
          "Our fee structure is transparent and shared upfront. It’s typically linked to the value of the property and the scope of support you need.",
      },
      {
        id: "fees-2",
        question: "When do I need to pay?",
        answer:
          "Payment milestones are clearly communicated before you start. You pay as we progress through defined stages of the service.",
      },
    ],
  },
  {
    id: "why",
    label: "Why Work With Us",
    items: [
      {
        id: "why-1",
        question: "What makes Propsoch different from brokers?",
        answer:
          "We focus on your interests, not inventory. You get research-backed shortlists, fair-price guidance, and support across search, negotiation, and paperwork—without pushy sales.",
      },
      {
        id: "why-2",
        question: "Do you work across cities?",
        answer:
          "We currently serve key metros. Check our website or get in touch to confirm availability in your city.",
      },
    ],
  },
  {
    id: "trust",
    label: "Trust",
    items: [
      {
        id: "trust-1",
        question: "How do I know the information is reliable?",
        answer:
          "We use verified sources, physical checks, and documented research. Our insights are based on data and site visits, not just listings.",
      },
      {
        id: "trust-2",
        question: "Are you registered or regulated?",
        answer:
          "We operate as a professional advisory service. Specific registrations and compliance depend on your location; we’re happy to share details when you reach out.",
      },
    ],
  },
];
