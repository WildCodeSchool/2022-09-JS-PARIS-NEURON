import React from "react";
import { Navbar, ProfilDisplay } from "@components/";

import "./UserProfile.scss";

export const UserProfile = () => {
  return (
    <div className="userprofile">
      <ProfilDisplay />
      <Navbar />
    </div>
  );
};
