import React, { useState } from "react";
import { LogoLong } from "../../assets/SvgComponents/LogoLong";
import { Avatar } from "..";
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
        <Avatar avatarStatus={avatarStatus} />
      </div>
      <div className="userheader_shortcuts">
        <div className="userheader_icon">
          <BrainIcon onClick={() => setAvatarStatus(!avatarStatus)} />
        </div>
      </div>
    </div>
  );
};
