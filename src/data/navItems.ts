export interface NavItem {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "ROOMS", path: "/rooms" },
  { name: "SERVICES", path: "/services" },
  { name: "GALLERY", path: "/gallery" },
  { name: "OFFERS", path: "/offers" },
  { name: "CONTACT", path: "/contact" }
];