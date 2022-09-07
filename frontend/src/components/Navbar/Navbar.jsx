import React from "react";
import { BrainDeployer } from "..";
import {
  CreateTopicIcon,
  LogoLong,
  TopicsIcon,
  UserProfileIcon,
} from "../../assets/SvgComponents";

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
