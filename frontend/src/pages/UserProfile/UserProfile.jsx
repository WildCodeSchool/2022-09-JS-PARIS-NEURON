import React from "react";
import {
  Navbar,
  TagsFavorites,
  ProfilDisplay,
  NeuronSettings,
} from "@components/";

import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <NeuronSettings />
      <TagsFavorites />
      <ProfilDisplay />
      <Navbar />
    </div>
  );
};
