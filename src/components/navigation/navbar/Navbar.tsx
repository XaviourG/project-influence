"use client";

import Logo from "@/components/global/Logo";
import "./styles.scss";
import ThemeChanger from "@/components/global/test";
import NavigationMenuToggle from "../menu/Toggle";
import { useEffect, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [isHidden, setIsHidden] = useState(false);

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

  return (
    <div className="navbar-global-wrapper">
      <div className={`navbar-root ${isHidden ? "hidden" : ""}`}>
        <Logo />
        <div className="group">
          <ThemeChanger />
          <NavigationMenuToggle />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
