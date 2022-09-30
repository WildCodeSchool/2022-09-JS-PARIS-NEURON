import React from "react";
import { Navbar, TagsFavorites } from "@components/";

import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <TagsFavorites />
      <Navbar />
    </div>
  );
};
