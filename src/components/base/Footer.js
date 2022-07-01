import React from "react";

import Discord from "./../../assets/discord.webp";
import Github from "./../../assets/github.png";

export default function Footer() {
  return (
    <footer>
      <a href="https://discord.com/users/740094143379800156">
        <img src={Discord} alt="Discord" />
      </a>
      <p>Made with ♥ by Lofty Brambles</p>
      <a href="https://github.com/Lofty-Brambles/restuarant-page">
        <img src={Github} alt="Github" />
      </a>
    </footer>
  );
}
