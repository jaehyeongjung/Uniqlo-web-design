import "./HeaderMenu.css";
import { React, useState } from "react";

const HeaderMenu = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen((prev) => !prev);
  };

  return (
    <div className="HeaderMenu" onClick={toggleMenu}>
      <div className={`HeaderMenuBar ${isMenuOpen ? "open" : ""}`}></div>
      <div className={`HeaderMenuBar ${isMenuOpen ? "open1" : ""}`}></div>
      <div className={`HeaderMenuBar ${isMenuOpen ? "open" : ""}`}></div>

      {isMenuOpen && (
        <div className="HeaderMenuItems">
          <div className="HeaderMenuItemsText">MEN</div>
          <div className="HeaderMenuItemsText">WOMEN</div>
          <div className="HeaderMenuItemsText">KIDS</div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
