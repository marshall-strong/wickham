import React from "react";
import Nav from "./Nav";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <Nav>
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
    </Nav>
  );
};

export default NavBar;
