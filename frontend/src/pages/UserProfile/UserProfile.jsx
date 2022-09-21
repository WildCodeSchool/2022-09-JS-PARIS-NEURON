import React from "react";
import { Navbar, NeuronFavorites} from "@components/";
import "./UserProfile.scss";


export const UserProfile = () => {
  return (
    <div className="userprofile">
      <NeuronFavorites/>
      <Navbar />
    </div>
  );
};
