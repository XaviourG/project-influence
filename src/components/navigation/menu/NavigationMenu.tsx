"use client";

import Link from "next/link";
import "./styles.scss";
import { usePathname } from "next/navigation";
import AuthorSignature from "@/components/article/signature/author-signature";
import { NAV_MENU_LINKS } from "./constants/NavMenuItems";
import { DEFAULT_AUTHOR } from "@/app/blog/[article]/constants";
import { Article } from "@prisma/client";
import LatestArticleShowcase from "./LatestArticleShowcase";

interface NavigationMenuProps {
  isHidden: boolean;
  toggleMenu: () => void;
  latestArticle: Article;
}

const NavigationMenu = ({
  isHidden,
  toggleMenu,
  latestArticle,
}: NavigationMenuProps) => {
  const pathname = usePathname();

  console.log({ latestArticle });

  return (
    <div className={`nav-menu-root ${isHidden ? "hidden" : ""}`}>
      <div className="menu-body">
        <LatestArticleShowcase
          article={latestArticle}
          toggleMenu={toggleMenu}
        />
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
        <div className="menu-link">
          <AuthorSignature image={DEFAULT_AUTHOR.IMAGE} publishDate={null} />
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
