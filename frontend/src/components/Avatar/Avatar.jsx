import React from "react";

import "./Avatar.scss";

export const Avatar = ({ connected }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <img
      className={connected ? "avatar on" : "avatar off"}
      src="\assets\images\avatarDefaultv2.svg"
      alt="Avatar"
    />
  );
};
