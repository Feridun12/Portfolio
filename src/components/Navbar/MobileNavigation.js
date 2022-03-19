import React from "react";
import NavLinks from "./NavLinks";
import "../Navbar/styles/TopBar.scss";
import { CgMenu } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenu
      className="hamburger"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="hamburger"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );
 const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavigation;
