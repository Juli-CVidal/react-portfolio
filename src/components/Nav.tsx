import React, { useState, useEffect } from "react";
import "../assets/styles/nav.css"
import NavItem, { NavItemProps } from "./NavItem";



const Nav: React.FC = () => {
  const [links, setLinks] = useState<NavItemProps[]>([]);

  useEffect(() => {
    const fetchLinks = async (): Promise<void> => {
      try {
        const response = await fetch("./src/data/navbarData.json");
        const data: NavItemProps[] = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href={links[0]?.href} className="nav__logo">
          Julián Vidal
        </a>

        <div className="nav__menu" id="nav-menu">
            {links.map(({ href, text,icon_class }, index) => (
              <NavItem
                key={index}
                href={href}
                text={text}
                icon_class={icon_class}
              />
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;