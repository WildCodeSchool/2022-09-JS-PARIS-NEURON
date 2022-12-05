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
      <Link to="/" title="page d'acceuil">
        <LogoLong />
      </Link>
      {localStorage.getItem("token") ? (
        <Link to={`/userprofile/${userId}`} title="mon profil">
          <UserProfileIcon />
        </Link>
      ) : null}
      <Link to="/topics" title="voir les topics">
        <TopicsIcon />
      </Link>
      {localStorage.getItem("token") ? (
        <Link to="/createtopics" title="créer un nouveau topic">
          <CreateTopicIcon />
        </Link>
      ) : null}
      <BrainDeployer />
    </nav>
  );
};
