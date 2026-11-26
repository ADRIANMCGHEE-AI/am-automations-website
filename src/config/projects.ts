export const projects = [
  {
    slug: "automated-follow-ups",
    title: "Automated Quotation Follow-Ups",
    label: "Interactive Prototype",
    category: "Sales automation",
    url: "https://automated-follow-ups-prototype.vercel.app/",
    image: "/projects/followups.jpg",
    description:
      "See a quotation move through scheduled reminders, customer replies and a clear stopping point.",
    intro:
      "An interactive quotation follow-up simulation. Send a sample quote, move the clock forward and see how replies change the next step.",
    problem:
      "After sending a quotation, a team may rely on memory, calendar notes or a spreadsheet to chase it. That creates repeated admin and makes it difficult to see which opportunities need attention.",
    reasoning:
      "A useful follow-up needs timing, context and a stopping rule. The simulation puts the quotation, message sequence and customer response together so those decisions are easy to inspect.",
    implementation:
      "A real implementation would connect the quotation source, an approved email account and the relevant customer or CRM records. Message approval, reply detection, opt-outs, exceptions and monitoring would be agreed and tested before launch.",
    benefit:
      "The intended benefit is a more consistent follow-up process, with less manual checking and clearer outstanding opportunities. This demonstration does not establish a measured sales uplift or guarantee a response.",
    features: [
      [
        "Send a demo quotation",
        "Start with a sample HVAC quotation and see the initial message in a simulated customer inbox.",
      ],
      [
        "Advance the clock",
        "Move the simulation forward by one day, three days or directly to the next follow-up.",
      ],
      [
        "See the sequence stop",
        "Reply as the customer or use the automatic reply option to explore cancellation of the remaining emails.",
      ],
    ],
    note: "The example is HVAC-oriented and can inform other quotation-driven workflows. All records and emails are simulated; no real emails are sent.",
  },
  {
    slug: "northstone",
    title: "Northstone Trade & Timber",
    label: "Concept Demonstration",
    category: "Connected commerce",
    url: "https://northstone-trade-timber.vercel.app/",
    image: "/projects/northstone.jpg",
    description:
      "Explore a merchant catalogue, sample product information and an online basket experience.",
    intro:
      "A trade-focused website and e-commerce concept showing how customers can discover materials, review product information and build a basket online.",
    problem:
      "A trade customer needs to find the right material, understand the specification and see the next buying step. When that information is hard to find online, routine questions can return to the counter or phone.",
    reasoning:
      "The concept brings categories, catalogue search, specifications, prices and sample stock indicators into one buying journey. Product detail supports the decision before the customer adds an item to a basket.",
    implementation:
      "A real merchant project would start with catalogue quality, trading rules and the systems already in use. Live stock, account pricing, payments, delivery rules and operational connections need their own agreed implementation and testing.",
    benefit:
      "The intended benefit is an easier route to product information and online buying. The concept does not prove reduced call volumes, live stock accuracy or a commercial result.",
    features: [
      [
        "Explore the catalogue",
        "Browse timber, insulation, plasterboard and building materials through product categories and catalogue search.",
      ],
      [
        "Review product details",
        "View specifications, demonstration prices including and excluding VAT, and sample stock indicators.",
      ],
      [
        "Build a basket",
        "Use add-to-basket controls and explore delivery, collection and trade-account information.",
      ],
    ],
    note: "An independent concept with sample products, prices and stock. It is not a live merchant or a paid client implementation. Live stock connections, payments and operational integrations require a separate implementation.",
  },
] as const;
