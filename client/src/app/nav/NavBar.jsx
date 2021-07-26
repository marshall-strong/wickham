import React from "react";
import { Link } from "react-router-dom";

// the NavItem component is where styling for the individual links is applied
const NavItem = ({ link, isActive, children }) => {
  return (
    <li
      className={`block px-4 py-2 rounded-md ${
        isActive ? "bg-red-100 text-blue-700" : ""
      }`}
    >
      <Link to={link}>{children}</Link>
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
      <NavItem link="/" isActive={true}>
        Home
      </NavItem>
      <NavItem link="/buildings" isActive={false}>
        Buildings
      </NavItem>
      <NavItem link="/kitchens" isActive={false}>
        Kitchens
      </NavItem>
      <NavItem link="/products" isActive={false}>
        Products
      </NavItem>
      <NavItem link="/recipes" isActive={false}>
        Recipes
      </NavItem>
      <NavItem link="/paper_products" isActive={false}>
        Paper Products
      </NavItem>
      <NavItem link="/food_products" isActive={false}>
        Food Products
      </NavItem>
      <NavItem link="/vendors" isActive={false}>
        Vendors
      </NavItem>
    </NavList>
  );
};

export default NavBar;
