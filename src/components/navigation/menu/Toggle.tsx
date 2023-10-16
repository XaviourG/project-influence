"use client";

interface NavigationMenuToggleProps {
  toggleMenu: () => void;
}

const NavigationMenuToggle = ({ toggleMenu }: NavigationMenuToggleProps) => {
  return (
    <div className="navbar-global-wrapper" onClick={toggleMenu}>
      nav menu toggle
    </div>
  );
};

export default NavigationMenuToggle;
