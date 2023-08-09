import React from "react";
import "remixicon/fonts/remixicon.css"

export interface NavItemProps {
  href: string;
  text: string;
  icon_class?: string,
}

const NavItem: React.FC<NavItemProps> = ({ href, text,icon_class }) => {
  return (
    <li className="nav__item">
      <a
        href={href}
      >
        {icon_class ? <i className={icon_class}></i> : undefined}
        {text}
      </a>
    </li>
  );
};

export default NavItem;