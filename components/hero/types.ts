// components/hero/types.ts

export type BannerCategory =
  | "ADMISSION"
  | "EVENT"
  | "NEWS"
  | "PROMOTION"
  | "GENERAL";

export type HeroBanner = {
  id: number;

  title: string;

  subtitle: string | null;

  image: string;

  category: BannerCategory;

  primaryButtonText: string | null;

  primaryButtonLink: string | null;

  secondaryButtonText: string | null;

  secondaryButtonLink: string | null;

  priority: number;

  isActive: boolean;

  startDate: Date | null;

  endDate: Date | null;

  createdAt: Date;

  updatedAt: Date;
};

// Announcement type
export type AnnouncementType =
  | "ADMISSION"
  | "EVENT"
  | "NEWS"
  | "NOTICE"
  | "PROMOTION";

export type HeroAnnouncement = {
  id: number;

  title: string;

  type: AnnouncementType;

  link: string | null;

  isActive: boolean;

  startDate: Date | null;

  endDate: Date | null;

  createdAt: Date;
};

// Quick links shown below hero
export type HeroQuickLink = {
  title: string;

  description: string;

  href: string;

  icon: string;
};

// Statistics cards
export type HeroStat = {
  value: number;

  label: string;

  suffix?: string;
};
