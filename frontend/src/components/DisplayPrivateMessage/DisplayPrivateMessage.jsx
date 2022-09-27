import React, { useState, useEffect } from "react";
import { PrivateMessage, Search } from "@components";
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
        <PrivateMessage
          username={PrivateMessage.username}
          object={PrivateMessage.subject}
        />
      </div>

      <Search
        placeholder="Search email "
        setContent={setSearchEmailByUsernameOrByDate}
        handleSearch={handleSearch}
      />
    </div>
  );
};
