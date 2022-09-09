import React from "react";
import { BrainDeployer } from "@components/";
import {
  CreateTopicIcon,
  LogoLong,
  TopicsIcon,
  UserProfileIcon,
} from "@assets";

import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <LogoLong />
      <UserProfileIcon />
      <TopicsIcon />
      <CreateTopicIcon />
      <BrainDeployer />
    </div>
  );
};
