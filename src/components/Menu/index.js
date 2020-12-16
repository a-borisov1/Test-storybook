import React from "react";

import { User } from "../User";
import { MenuItem } from "../MenuItem";

import style from "./style.module.scss";

export const Menu = ({ tabs }) => {
  console.log("tabs", tabs);
  return (
    <div className={style.Wrapper}>
      <nav className={style.Menu}>
        <ul className={style.Menu_list}>
          {tabs.map((tab) => (
            <MenuItem
              key={tab.path}
              path={tab.path}
              label={tab.label}
              withIndicator={tab.withIndicator}
            />
          ))}
        </ul>
      </nav>
      <User />
    </div>
  );
};
