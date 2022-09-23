import React from "react";
import { Avatar } from "@components";

export const PrivateMessage = () => {
  return (
    <div>
      <div className="privatemessage_header">
        <Avatar />
        {/* <span className="pseudo_sender">{username}</span> */}
        {/* <span className="subject">{subject}</span> */}
      </div>
      <PrivateMessage />
    </div>
  );
};
