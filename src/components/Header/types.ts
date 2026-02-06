export type DropdownItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  href?: string;
  anchorId?: string;
};

export type HeaderNavItem = {
  id: string;
  label?: string;
  href?: string;
  anchorId?: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
};

export type HeaderProps = {
  items: HeaderNavItem[];
  onGetStartedClick?: () => void;
  onNavItemClick?: (id: string) => void;
};
