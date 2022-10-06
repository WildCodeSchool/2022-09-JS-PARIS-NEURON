import React, { useEffect, useState } from "react";
import { Avatar } from "@components/";
import { MailOnIcon, NotifOnIcon } from "@assets";

import "./UserHeader.scss";

export const UserHeader = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  return (
    <header className="userheader">
      <div className="userheader_pseudo">
        <span>{userName || "invité"}</span>
      </div>
      <div className="userheader_avatarContainer">
        <Avatar />
      </div>
      <div className="userheader_shortcuts">
        <NotifOnIcon />
        <MailOnIcon />
      </div>
    </header>
  );
};
