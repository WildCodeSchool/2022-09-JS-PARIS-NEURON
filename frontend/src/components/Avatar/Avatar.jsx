import React from "react";
import { useAvatarContext } from "../../context";

import "./Avatar.scss";

export const Avatar = () => {
  const { avatarStatus, setAvatarStatus } = useAvatarContext();

  return (
    <button
      type="button"
      className={avatarStatus ? "avatar on" : "avatar off"}
      onClick={() => setAvatarStatus(!avatarStatus)}
    />
  );
};
