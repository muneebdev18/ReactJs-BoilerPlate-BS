import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from './style.module.css'
const Sidebar = () => {
  return (
    <>
      <GiHamburgerMenu
        size={28}
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      />
      <div
        className={`offcanvas offcanvas-start ${styles.sidebarContainer}`}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        {/* Write The Design Code Here */}
        <GiHamburgerMenu/>
      </div>
    </>
  );
};

export default Sidebar;
