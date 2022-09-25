import React from "react";
import { Navbar, DisplayPrivateMessage } from "@components/";

import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <DisplayPrivateMessage />
      {/* <TagsFavorites /> */}
      <Navbar />
    </div>
  );
};
