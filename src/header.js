import React from "react";
import Icon from "./asset/uniqloLogo.png";
import "./Header.css";

const Header = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="HeaderContainer" onClick={handleClick}>
      <div className="HeaderTitle">UNIQLO</div>
      <img src={Icon} className="icon" alt="Icon" />
    </div>
  );
};

export default Header;
