import React, { useEffect, useState } from "react";
import { Avatar } from "@components/";

import "./UserHeader.scss";

export const UserHeader = () => {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    const today = new Date();
    setDate(
      `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
    );
  }, []);

  return (
    <header className="userheader">
      <div className="userheader_pseudo">
        <span>{userName || "invité"}</span>
      </div>
      <div className="userheader_avatarContainer">
        <Avatar connected={localStorage.getItem("token")} />
      </div>
      <div className="userheader_shortcuts">
        <span>{date}</span>
      </div>
    </header>
  );
};
