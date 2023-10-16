"use client";

interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <div className="footer-wrapper">{children}</div>;
};

export default Footer;
