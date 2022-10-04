import React from "react";
import { Navbar, NeuronSettings } from "@components/";

import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <NeuronSettings />
      <Navbar />
    </div>
  );
};
