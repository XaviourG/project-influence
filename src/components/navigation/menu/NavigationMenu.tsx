"use client";

import "./styles.scss";

interface NavigationMenuProps {
  isHidden: boolean;
}

const NavigationMenu = ({ isHidden }: NavigationMenuProps) => {
  return (
    <div className={`nav-menu-root ${isHidden ? "hidden" : ""}`}>nav menu</div>
  );
};

export default NavigationMenu;
