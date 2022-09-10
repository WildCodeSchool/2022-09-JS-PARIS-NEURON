import React from "react";
import { BrainDeployer } from "@components/";
import {
  CreateTopicIcon,
  LogoLong,
  TopicsIcon,
  UserProfileIcon,
} from "@assets";

import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <LogoLong />
      </Link>
      <UserProfileIcon />
      <Link to="/topics">
        <TopicsIcon />
      </Link>
      <CreateTopicIcon />
      <BrainDeployer />
    </div>
  );
};
