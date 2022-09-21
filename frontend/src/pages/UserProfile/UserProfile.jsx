import React from "react";
import { Navbar, TopicsFavorites } from "@components/";
import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <TopicsFavorites />
      <Navbar />
    </div>
  );
};
