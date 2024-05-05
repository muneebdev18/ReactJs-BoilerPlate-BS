import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        {/* Write The Design Code Here */}
      </div>
    </>
  );
};

export default Sidebar;
