/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { BrainIcon, LogOnIcon, MailOnIcon, NotifOnIcon } from "@assets";
import { Auth } from "@modals";
import useModal from "@services/useModal";

import "./BrainDeployer.scss";
import { Link } from "react-router-dom";

export const BrainDeployer = () => {
  const [touched, setTouched] = useState(false);

  const { isShowing, toggle } = useModal();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleToggle = () => {
    toggle();
  };

  return (
    <>
      <div
        role="button"
        className={!touched ? "braindeployer" : "braindeployer touched"}
        onClick={() => (windowWidth < 1200 ? setTouched(!touched) : null)}
      >
        <BrainIcon />
        <div className="braindeployer_circle first" title="me connecter">
          <LogOnIcon onClick={() => handleToggle()} />
        </div>
        <div className="braindeployer_circle second" title="mes messages">
          {localStorage.getItem("token") ? (
            <Link to="/createmail">
              <MailOnIcon />
            </Link>
          ) : (
            <MailOnIcon onClick={() => handleToggle()} />
          )}
        </div>
        <div className="braindeployer_circle third" title="mes notifications">
          {localStorage.getItem("token") ? (
            <Link to="/createmail">
              <NotifOnIcon />
            </Link>
          ) : (
            <NotifOnIcon onClick={() => handleToggle()} />
          )}
        </div>
      </div>
      <Auth show={isShowing} hide={toggle} />
    </>
  );
};
