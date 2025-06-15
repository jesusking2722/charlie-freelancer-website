import { TNavItem } from "@/components/templates/NavLayout";

export interface INavItem {
  label: string;
  path: string;
  active: boolean;
  children?: React.ReactNode;
}

export type TFindTalentNavItem = {
  title: string;
  subtitle: string;
  path: string;
  children?: React.ReactNode;
};

export type TMenuItem = {
  label?: string;
  description?: string;
  value?: any;
  icon?: string;
};

export type TLinkDropdownItem = {
  label: string;
  path: string;
  icon?: string;
};

export type TCatLayoutExpertCategory = {
  name: string;
  rate: number;
  experts: string[]; // Avatars
  path: string;
};

export type TAccordionItem = {
  id: string;
  title: string;
  description: string;
};

export type TAccordionImageViewerItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export interface IExpandableText {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export type TLink = {
  label: string;
  path: string;
};

export interface ICatFreelancerCategory {
  title: string;
  items: TLink[];
}

export type TSEO = {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
};

export type TBadgeType = "FREELANCER" | "JOB_SUCCESS_SCORE";

export type TFreelancerBadgeType =
  | "TOP_RATED_PLUS"
  | "TOP_RATED"
  | "RISING_TALENT";

export type TFreelancerBadge = {
  type: TFreelancerBadgeType;
  title?: string;
  value?: string;
  iconUrl: string;
  width?: number;
  height?: number;
};

export type TRateTimeUnit = "hr" | "min";

export type TFreelancer = {
  id: string;
  name: string;
  profession: string;
  about: string;
  pic?: string;
  ranking: number;
  badge: TFreelancerBadge;
  rate: {
    amount: number;
    unit: TRateTimeUnit;
    duration?: number;
  };
  skills: string[];
  jobs: number;
};

export type TServiceCategoryCard = {
  image: string;
  label: string;
  path: string;
};

export type TProjectCard = {
  images: string[];
  title: TNavItem;
  deliveryTime: string;
  price: string;
  seller: {
    name: string;
    avatar: string;
    ranking: number;
    reviewCount: number;
    badge: TFreelancerBadge;
    isOnline?: boolean;
  };
  isLoading?: boolean;
};

export type TServiceCard = {
  title: string;
  services: TNavItem[];
  imageUrl?: string;
  icon?: React.ReactNode;
  showAll: string;
};
