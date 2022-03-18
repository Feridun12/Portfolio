import React from "react";
import NavLinks from "./NavLinks";
import "../Navbar/styles/TopBar.scss";

function MobileNavigation() {
  return (
    <nav className="mobile-navigation">
      <NavLinks />
    </nav>
  );
}

export default MobileNavigation;
