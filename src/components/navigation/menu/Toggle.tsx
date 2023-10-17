"use client";

// import { RiMenuLine, RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import "./styles.scss";
import { useState } from "react";

interface NavigationMenuToggleProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavigationMenuToggle = ({
  isMenuOpen,
  toggleMenu,
}: NavigationMenuToggleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // const icon = isMenuOpen ? (
  //   isHovered ? (
  //     <RiMenuUnfoldLine />
  //   ) : (
  //     <RiMenuFoldLine />
  //   )
  // ) : isHovered ? (
  //   <RiMenuFoldLine />
  // ) : (
  //   <RiMenuLine />
  // );

  return (
    <div
      className={`toggle-icon ${isHovered ? "hover" : ""}`}
      onClick={toggleMenu}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="line" />
      <div className={`line ${isMenuOpen ? "" : "toggle2"}`} />
      <div className={`line ${isMenuOpen ? "" : "toggle3"}`} />
    </div>
  );
};

export default NavigationMenuToggle;
