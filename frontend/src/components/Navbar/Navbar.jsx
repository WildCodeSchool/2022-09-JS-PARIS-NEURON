import React from "react";
import { BrainDeployer } from "..";
import {
  CreateTopicIcon,
  LogoLong,
  TopicsIcon,
  UserProfileIcon,
} from "../../assets/SvgComponents";
import { useAvatarContext } from "../../context";

import "./Navbar.scss";

export const Navbar = () => {
  const { avatarStatus, setAvatarStatus } = useAvatarContext();

  return (
    <div className="navbar">
      <LogoLong />
      <UserProfileIcon />
      <TopicsIcon />
      <CreateTopicIcon />
      <BrainDeployer onClick={() => setAvatarStatus(!avatarStatus)} />
    </div>
  );
};
