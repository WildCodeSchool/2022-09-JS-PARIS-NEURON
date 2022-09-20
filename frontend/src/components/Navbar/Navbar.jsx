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
    <nav className="navbar">
      <Link to="/">
        <LogoLong />
      </Link>
      <Link to="/userprofile">
        <UserProfileIcon />
      </Link>
      <Link to="/topics">
        <TopicsIcon />
      </Link>
      <Link to="/createtopics">
        <CreateTopicIcon />
      </Link>
      <BrainDeployer />
    </nav>
  );
};
