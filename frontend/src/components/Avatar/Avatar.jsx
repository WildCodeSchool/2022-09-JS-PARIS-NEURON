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
    />
  );
};
