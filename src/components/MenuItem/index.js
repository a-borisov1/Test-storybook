import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./style.module.scss";

export const Notification = ({ count }) => {
  return (
    <span className={style.Menu_notify_count}>
      {count > 99 ? "99+" : count}
    </span>
  );
};

export const MenuItem = ({ label, path, withIndicator = false }) => {
  const activeStyle = { color: "#006dbe" };

  return (
    <li className={style.Menu_item}>
      <NavLink exact to={path} activeStyle={activeStyle}>
        {label}
      </NavLink>
      {withIndicator && <Notification count={10} />}
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};
