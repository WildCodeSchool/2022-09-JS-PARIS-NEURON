import React from "react";
import { Navbar, ProfilDisplay, NeuronSettings } from "@components/";
import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <NeuronSettings />
      <ProfilDisplay />
      <Navbar />
    </div>
  );
};
