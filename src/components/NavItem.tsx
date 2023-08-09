import React from "react";
import "remixicon/fonts/remixicon.css";

export interface NavItemProps {
  href: string;
  text: string;
  icon_class?: string;
}

const NavItem: React.FC<NavItemProps & { isActive: boolean, onClick: () => void }> = ({ href, text, icon_class, isActive, onClick }) => {
  const itemClassName = isActive ? "nav__item active" : "nav__item";
  return (
    <a href={href} className={itemClassName} onClick={onClick}>
      {icon_class ? <i className={icon_class}></i> : undefined}
      {text}
    </a>
  );
};

export default NavItem;
