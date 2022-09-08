import React from "react";
import { MailOnIcon, NotifOnIcon } from "../../assets/SvgComponents";
import { Avatar } from "..";
import { useAvatarContext } from "../../context";

import "./UserHeader.scss";

export const UserHeader = () => {
  const { avatarStatus } = useAvatarContext();

  return (
    <div className="userheader">
      <div className="userheader_pseudo">
        {/* <LogoLong /> */}
        <span>Yoh</span>
      </div>
      <div className="userheader_avatarContainer">
        <Avatar avatarStatus={avatarStatus} />
      </div>
      <div className="userheader_shortcuts">
        <NotifOnIcon />
        <MailOnIcon />
      </div>
    </div>
  );
};
