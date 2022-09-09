import React from "react";
import { useAvatarContext } from "../../context";

import "./Avatar.scss";

export const Avatar = () => {
  const { avatarStatus, setAvatarStatus } = useAvatarContext();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={avatarStatus ? "avatar on" : "avatar off"}
      onClick={() => setAvatarStatus(!avatarStatus)}
    >
      <img
        className="avatar-content"
        src="\src\assets\avatarDefaultv2.svg"
        alt="Avatar"
        width="100%"
        height="100%"
      />
    </div>
  );
};
