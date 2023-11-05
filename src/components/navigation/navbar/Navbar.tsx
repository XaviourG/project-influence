"use client";

import Logo from "@/components/global/logo/icon";
import "./styles.scss";
import ThemeChanger from "@/components/global/theme/toggle";
import NavigationMenuToggle from "../menu/Toggle";
import { useEffect, useState } from "react";
import NavigationMenu from "../menu/NavigationMenu";
import { Article } from "@prisma/client";

interface NavbarProps {
  children: React.ReactNode;
  latestArticle: Article;
}

const Navbar = ({ children, latestArticle }: NavbarProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  useEffect(() => {
    let prevScrollY = 0;
    const onScroll = (event: Event) => {
      if (window.scrollY > prevScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      prevScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMenuHidden = () => {
    if (isMenuHidden) {
      setIsMenuHidden(false);
      document.body.style.overflow = "hidden";
    } else {
      setIsMenuHidden(true);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="navbar-global-wrapper">
      <div
        className={`navbar-root ${isHidden && isMenuHidden ? "hidden" : ""}`}
      >
        <div className="content">
          <Logo />
          <div className="group">
            {!isMenuHidden && <ThemeChanger />}
            <NavigationMenuToggle
              toggleMenu={toggleMenuHidden}
              isMenuOpen={!isMenuHidden}
            />
          </div>
        </div>
      </div>
      <NavigationMenu
        isHidden={isMenuHidden}
        toggleMenu={toggleMenuHidden}
        latestArticle={latestArticle}
      />
      {children}
    </div>
  );
};

export default Navbar;
