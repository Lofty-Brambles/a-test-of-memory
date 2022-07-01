import React from "react";
import logo from "./../../assets/grif-logo.png";

export default function Header() {
  return (
    <header>
      <span
        className="block material-symbols-outlined md-36"
        onClick={() => window.location.reload()}
      >
        refresh
      </span>
      <div>
        <img src={logo} alt="Logo" />
        <div>Memory Pets!</div>
      </div>
      <a href="https://github.com/Lofty-Brambles/a-test-of-memory">
        <span className="block material-symbols-outlined md-36">flag</span>
      </a>
    </header>
  );
}
