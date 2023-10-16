"use client";

import Logo from "@/components/global/Logo";
import "./styles.scss";
import ThemeChanger from "@/components/global/test";
import NavigationMenuToggle from "../menu/Toggle";
import { useEffect, useState } from "react";
import NavigationMenu from "../menu/NavigationMenu";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
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
        <Logo />
        <div className="group">
          <ThemeChanger />
          <NavigationMenuToggle toggleMenu={toggleMenuHidden} />
        </div>
      </div>
      <NavigationMenu isHidden={isMenuHidden} />
      {children}
    </div>
  );
};

export default Navbar;
