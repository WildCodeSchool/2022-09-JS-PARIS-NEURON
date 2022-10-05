import React, { useEffect, useState } from "react";
import { Avatar } from "@components/";
import { MailOnIcon, NotifOnIcon } from "@assets";

import "./UserHeader.scss";

export const UserHeader = () => {
  const [userName, setUserName] = useState("");
  const [connected, setConnected] = useState(0);

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    if (userName.length > 1) setConnected(1);
  }, []);

  console.warn(connected);

  return (
    <header className="userheader">
      <div className="userheader_pseudo">
        <span>{userName || "invité"}</span>
      </div>
      <div className="userheader_avatarContainer">
        <Avatar status={connected} />
      </div>
      <div className="userheader_shortcuts">
        <NotifOnIcon />
        <MailOnIcon />
      </div>
    </header>
  );
};
