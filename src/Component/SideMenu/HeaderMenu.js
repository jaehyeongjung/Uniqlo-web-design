import "./SideMenu.css";
import { React, useState } from "react";

const SideMenu = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen((prev) => !prev);
  };

  return (
    <div className="SideMenu" onClick={toggleMenu}>
      <div className={`SideMenuBar ${isMenuOpen ? "open" : ""}`}></div>
      <div className={`SideMenuBar ${isMenuOpen ? "open1" : ""}`}></div>
      <div className={`SideMenuBar ${isMenuOpen ? "open" : ""}`}></div>

      {isMenuOpen && (
        <div className="SideMenuItems">
          <div className="SideMenuItemsText">MEN</div>
          <div className="SideMenuItemsText">WOMEN</div>
          <div className="SideMenuItemsText">KIDS</div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
