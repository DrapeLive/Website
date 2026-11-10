export interface Project {
  slug: string;
  name: string;
  hasPrivacyPage: boolean;
}

export const projects: Project[] = [
  { slug: "blastoff", name: "BlastOff", hasPrivacyPage: true },
  { slug: "omniledger", name: "Omni Ledger", hasPrivacyPage: true },
  { slug: "paisabook", name: "Paisa Book", hasPrivacyPage: true },
  {
    slug: "polisum_kallanum",
    name: "Polisum Kallanum",
    hasPrivacyPage: true,
  },
  { slug: "stockflow", name: "StockFlow", hasPrivacyPage: false },
];
