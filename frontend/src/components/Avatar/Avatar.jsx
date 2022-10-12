import React from "react";

import "./Avatar.scss";

export const Avatar = ({ connected }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={connected === 1 ? "avatar on" : "avatar off"}>
      <img
        className="avatar-content"
        src=".\assets\images\avatarDefaultv2.svg"
        alt="Avatar"
      />
    </div>
  );
};
