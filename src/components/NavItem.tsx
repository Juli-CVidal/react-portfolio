import React from "react";
import "remixicon/fonts/remixicon.css";

export interface NavItemProps {
  href: string;
  text: string;
  icon_class?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, icon_class }) => {
  return (
    <a href={href} className="nav__item">
      {icon_class ? <i className={icon_class}></i> : undefined}
      {text}
    </a>
  );
};

export default NavItem;
