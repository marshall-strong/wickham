import React from "react";
import Nav from "./Nav";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <Nav>
      <NavItem href="/" isActive>
        Home
      </NavItem>
      <NavItem href="/counter">Counter</NavItem>
      <NavItem href="/logo">Logo</NavItem>
      <NavItem href="/sample_links">Sample Links</NavItem>
    </Nav>
  );
};

export default NavBar;
