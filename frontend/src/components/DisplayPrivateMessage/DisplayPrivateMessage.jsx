import React, { useEffect, useState } from "react";
import { PrivateMessage } from "@components";
import { getEmail } from "@services/apiRequest";
import { Avatar } from "@components";

export const DisplayPrivateMessage = () => {
  const [searchEmail, setSearchEmail] = useState([]);
  useEffect(() => {
    getEmail();
  }, []);
  return (
    <div>
      <input type="search" id="searchbar_emails" />
      
      <button type="submit">Search</button>
      <div className="emails_container">
        <Avatar />
        <PrivateMessage
          username={PrivateMessage.username}
          object={PrivateMessage.subject}
        />
      </div>
    </div>
  );
};
