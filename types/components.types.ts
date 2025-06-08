export interface INavItem {
  label: string;
  path: string;
  active: boolean;
  children?: React.ReactNode;
}
