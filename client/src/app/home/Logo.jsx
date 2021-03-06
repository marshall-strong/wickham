import React from "react";
import logo from "./logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <header className="Logo-header">
        <img src={logo} className="Logo-logo" alt="logo" />
        {/* <Counter /> */}
        {/* <p>
          Edit <code>src/Logo.jsx</code> and save to reload.
        </p> */}
        {/* <span>
          <span>Learn </span>
          <a
            className="Logo-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="Logo-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="Logo-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="Logo-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
};

export default Logo;
