import React from "react";
import uniqloLogo from "../../asset/img/uniqloLogo.png";
import "./Header.css";
import SideMenu from "../SideMenu/SideMenu";

const Header = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 맨 위로 부드럽게 스크롤
  };

  return (
    <>
      <div className="HeaderContainer">
        <SideMenu />
        <div className="HeaderTitleAndLogo" onClick={handleClick}>
          <div className="HeaderTitle">UNIQLO</div>
          <img src={uniqloLogo} className="uniqloLogo" alt="uniqloLogo" />
        </div>
      </div>
    </>
  );
};

export default Header;
