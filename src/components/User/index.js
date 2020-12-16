import React from "react";

import style from "./style.module.scss";
import EmptyAvatar from "../../assets/EmptyAvatar.webp";

export const User = ({ avatarUrl, fullName = "Harry" }) => {
  return (
    <div className={style.User}>
      <img
        src={avatarUrl ? avatarUrl : EmptyAvatar}
        alt="Avatar"
        height={50}
        width={50}
      />
      <span className={style.User_name}>{fullName}</span>
      <span className={style.Arrow}>
        <span className={style.Arrow_icon}></span>
      </span>
    </div>
  );
};
