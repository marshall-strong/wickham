import React from "react";

// the NavItem component is where styling for the individual links is applied
const NavItem = ({ href, isActive, children }) => {
  return (
    <li
      className={`block px-4 py-2 rounded-md ${
        isActive ? "bg-red-100 text-blue-700" : ""
      }`}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

// the NavList component is where styling for the entire NavBar is applied
const NavList = ({ children }) => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-2">{children}</ul>
    </nav>
  );
};

const NavBar = () => {
  return (
    <NavList>
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
      <NavItem href="/buildings" isActive={false}>
        Buildings
      </NavItem>
      <NavItem href="/kitchens" isActive={false}>
        Kitchens
      </NavItem>
      <NavItem href="/products" isActive={false}>
        Products
      </NavItem>
      <NavItem href="/recipes" isActive={false}>
        Recipes
      </NavItem>
      <NavItem href="/paper_products" isActive={false}>
        Paper Products
      </NavItem>
      <NavItem href="/food_products" isActive={false}>
        Food Products
      </NavItem>
      <NavItem href="/vendors" isActive={false}>
        Vendors
      </NavItem>
    </NavList>
  );
};

export default NavBar;
