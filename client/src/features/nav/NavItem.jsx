import React from "react";

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

export default NavItem;
