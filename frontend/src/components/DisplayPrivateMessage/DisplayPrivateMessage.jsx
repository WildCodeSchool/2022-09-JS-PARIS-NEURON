import React, { useState, useEffect } from "react";
import { PrivateMessage, Avatar, Search } from "@components";
import { getEmail } from "@services/apiRequest";

export const DisplayPrivateMessage = () => {
  const [searchEmail, setSearchEmailByUsernameOrByDate] = useState([]);
  useEffect(() => {
    getEmail(setSearchEmailByUsernameOrByDate);
  }, []);

  const handleSearch = () => {
    getEmail(searchEmail, setSearchEmailByUsernameOrByDate);
  };
  return (
    <div>
      <div className="emails_container">
        <Avatar />
        <PrivateMessage
          username={PrivateMessage.username}
          object={PrivateMessage.subject}
        />
      </div>
      <input type="search" id="searchbar_emails" />
      <Search
        placeholder="Search email "
        setContent={setSearchEmailByUsernameOrByDate}
        handleSearch={handleSearch}
      />
      <button type="submit">Search</button>
    </div>
  );
};
