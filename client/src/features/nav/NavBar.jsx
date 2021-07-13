import React from "react";
import Nav from "./Nav";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <Nav>
      <li className={"block px-4 py-2 rounded-md bg-yellow-100 text-blue-700"}>
        <a
          href="https://github.com/marshall-strong/wickham"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <NavItem href="/" isActive={true}>
        Home
      </NavItem>
      <NavItem href="/counter" isActive={false}>
        Counter
      </NavItem>
      <NavItem href="/logo" isActive={false}>
        Logo
      </NavItem>
      <NavItem href="/sample_links" isActive={false}>
        Sample Links
      </NavItem>
      <NavItem href="/buildings" isActive={false}>
        Buildings
      </NavItem>
      <NavItem href="/kitchens" isActive={false}>
        Kitchens
      </NavItem>
      <NavItem href="/products" isActive={false}>
        Products
      </NavItem>
    </Nav>
  );
};

export default NavBar;
