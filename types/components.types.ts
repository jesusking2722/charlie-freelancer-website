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
