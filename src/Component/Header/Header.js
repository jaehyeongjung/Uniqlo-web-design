import React from "react";
import Icon from "../../asset/uniqloLogo.png";
import "./Header.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="HeaderContainer">
        <HeaderMenu />
        <div className="HeaderTitleAndLogo" onClick={handleClick}>
          <div className="HeaderTitle">UNIQLO</div>
          <img src={Icon} className="icon" alt="Icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
