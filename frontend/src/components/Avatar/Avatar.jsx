import React from "react";

import "./Avatar.scss";

export const Avatar = ({ avatarStatus }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div className={avatarStatus ? "avatar on" : "avatar off"} />
  );
};
