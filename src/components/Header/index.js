import React from "react";
import { useHistory } from "react-router-dom";

import { HOME } from "../../constants/routes";

import style from "./style.module.scss";
import logo from "../../assets/Logo.png";

import { Menu } from "../Menu";

export const Header = ({ navTabs }) => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push(HOME);
  };

  return (
    <header className={style.Header}>
      <img
        className={style.Header_logo}
        src={logo}
        alt="Logo"
        onClick={handleLogoClick}
      />
      <Menu tabs={navTabs} />
    </header>
  );
};
