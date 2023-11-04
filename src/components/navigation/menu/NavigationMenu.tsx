"use client";

import Link from "next/link";
import "./styles.scss";
import { usePathname } from "next/navigation";
import AuthorSignature from "@/components/article/signature/author-signature";
import { NAV_MENU_LINKS } from "./constants/NavMenuItems";

interface NavigationMenuProps {
  isHidden: boolean;
  toggleMenu: () => void;
}

const NavigationMenu = ({ isHidden, toggleMenu }: NavigationMenuProps) => {
  const pathname = usePathname();

  return (
    <div className={`nav-menu-root ${isHidden ? "hidden" : ""}`}>
      <div className="menu-body">
        {/* LATEST ARTICLE COMPONENT */}
        {NAV_MENU_LINKS.map((navigationLink, index) => (
          <div key={index} className="menu-link-wrapper">
            <Link
              className={`menu-link ${
                pathname === navigationLink.path ? "active" : ""
              }`}
              onClick={toggleMenu}
              href={navigationLink.path}
            >
              {navigationLink.label}
            </Link>
          </div>
        ))}
        {/* SOCIAL LINKS */}
      </div>
    </div>
  );
};

export default NavigationMenu;
