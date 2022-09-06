import React, { useState } from "react";
import { LogoLong } from "../../assets/SvgComponents/LogoLong";
import { BrainIcon } from "../../assets/SvgComponents/BrainIcon";

import "./UserHeader.scss";

export const UserHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const [avatarStatus, setAvatarStatus] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(false);

  return (
    <div className="userheader">
      <div className="pseudo">
        <LogoLong />
        <span>Yoh</span>
      </div>
      <div className="avatar-container">
        <div className={avatarStatus ? "avatar on" : "avatar off"} />
      </div>
      <div className="shortcuts">
        <BrainIcon />
      </div>
    </div>
  );
};
