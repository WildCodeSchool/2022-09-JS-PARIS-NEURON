import React, { useState } from "react";
import { LogoLong } from "../../assets/SvgComponents/LogoLong";
import { BrainIcon } from "../../assets/SvgComponents/BrainIcon";

import "./UserHeader.scss";

export const UserHeader = () => {
  const [avatarStatus, setAvatarStatus] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(false);

  return (
    <div className="userheader">
      <div className="userheader_pseudo">
        <LogoLong />
        <span>Yoh</span>
      </div>
      <div className="userheader_avatarContainer">
        <div
          className={
            avatarStatus
              ? "userheader_avatar userheader_avatar_on"
              : "userheader_avatar userheader_avatar_off"
          }
        />
      </div>
      <div className="userheader_shortcuts">
        <div className="userheader_icon">
          <BrainIcon onClick={() => setAvatarStatus(!avatarStatus)} />
        </div>
      </div>
    </div>
  );
};
