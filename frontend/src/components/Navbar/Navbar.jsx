import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrainDeployer } from "@components/";
import {
  CreateTopicIcon,
  LogoLong,
  TopicsIcon,
  UserProfileIcon,
} from "@assets";

import "./Navbar.scss";

export const Navbar = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, [userId]);

  return (
    <nav className="navbar">
      <Link to="/">
        <LogoLong />
      </Link>
      {localStorage.getItem("token") ? (
        <Link to={`/userprofile/${userId}`}>
          <UserProfileIcon />
        </Link>
      ) : null}
      <Link to="/topics">
        <TopicsIcon />
      </Link>
      {localStorage.getItem("token") ? (
        <Link to="/createtopics">
          <CreateTopicIcon />
        </Link>
      ) : null}
      <BrainDeployer />
    </nav>
  );
};
