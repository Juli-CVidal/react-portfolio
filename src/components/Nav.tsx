import React, { useState, useEffect } from "react";
import "../assets/styles/nav.css"
import NavItem, { NavItemProps } from "./NavItem";



const Nav: React.FC = () => {
  const [links, setLinks] = useState<NavItemProps[]>([]);
  const [lastClickedIndex, setLastClickedIndex] = useState<number>(0);

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
      <nav className="nav">
        <a href={links[0]?.href} className="nav__logo">
          Julián<span className="highlight__cursive">Vidal</span>
        </a>

        <div className="nav__menu" id="nav-menu">
            {links.map(({ href, text,icon_class }, index) => (
              <NavItem
              key={index}
              href={href}
              text={text}
              icon_class={icon_class}
              isActive={index === lastClickedIndex}
              onClick={() => setLastClickedIndex(index)}
            />
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;