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
