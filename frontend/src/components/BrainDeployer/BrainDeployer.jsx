import React, { useState } from "react";
import { BrainIcon, LogOnIcon, MailOnIcon, NotifOnIcon } from "@assets";
import { useAvatarContext } from "@contexts";
import "./BrainDeployer.scss";

export const BrainDeployer = () => {
  const { avatarStatus, setAvatarStatus } = useAvatarContext();

  const [touched, setTouched] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <div
      role="button"
      className={!touched ? "braindeployer" : "braindeployer touched"}
      onClick={() => (windowWidth < 1440 ? setTouched(!touched) : null)}
    >
      <BrainIcon />
      <div className="braindeployer_circle first">
        <LogOnIcon onClick={() => setAvatarStatus(!avatarStatus)} />
      </div>
      <div className="braindeployer_circle second">
        <MailOnIcon />
      </div>
      <div className="braindeployer_circle third">
        <NotifOnIcon />
      </div>
    </div>
  );
};
