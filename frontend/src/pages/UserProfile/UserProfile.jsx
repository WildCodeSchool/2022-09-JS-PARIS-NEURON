import React from "react";
import { Navbar, TagsFavorites, ProfilDisplay } from "@components/";

  
import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <TagsFavorites />
      <ProfilDisplay />
      <Navbar />
    </div>
  );
};
