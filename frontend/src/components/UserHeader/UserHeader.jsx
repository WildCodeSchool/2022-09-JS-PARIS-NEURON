import React from "react";
import { Avatar } from "@components/";
import { MailOnIcon, NotifOnIcon } from "@assets";
import { useAvatarContext } from "@contexts";
import "./UserHeader.scss";

export const UserHeader = () => {
  const { avatarStatus, setAvatarStatus } = useAvatarContext();

  return (
    <header className="userheader">
      <div className="userheader_pseudo">
        {/* <LogoLong /> */}
        <span>Yoh</span>
      </div>
      <div className="userheader_avatarContainer">
        <Avatar onClick={() => setAvatarStatus(!avatarStatus)} />
      </div>
      <div className="userheader_shortcuts">
        <NotifOnIcon />
        <MailOnIcon />
      </div>
    </header>
  );
};
