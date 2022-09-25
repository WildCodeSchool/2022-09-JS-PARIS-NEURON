import React from "react";
import { PrivateMessage } from "@components";

export const DisplayPrivateMessage = () => {
  return (
    <div>
      <input type="search" id="searchbar_emails" />
      <button type="submit">Search</button>
      <div className="emails_container">
        <PrivateMessage />
      </div>
    </div>
  );
};
