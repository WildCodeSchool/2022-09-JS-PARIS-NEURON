import React from "react";
import { BrainIcon } from "../../assets/SvgComponents/BrainIcon";

import "./BrainDeployer.scss";

export const BrainDeployer = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="braindeployer" onClick={onClick}>
      <BrainIcon />
      <div className="braindeployer_circle first" />
      <div className="braindeployer_circle second" />
      <div className="braindeployer_circle third" />
    </div>
  );
};
