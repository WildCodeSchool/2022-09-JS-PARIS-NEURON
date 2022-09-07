import React from "react";

import "./Avatar.scss";

export const Avatar = ({ avatarStatus }) => {
  return <div className={avatarStatus ? "avatar on" : "avatar off"} />;
};
