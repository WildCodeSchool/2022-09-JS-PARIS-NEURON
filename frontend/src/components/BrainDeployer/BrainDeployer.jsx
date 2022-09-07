import React from "react";
import {
  BrainIcon,
  LogOnIcon,
  MailOnIcon,
  NotifOnIcon,
} from "../../assets/SvgComponents";

import "./BrainDeployer.scss";

export const BrainDeployer = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="braindeployer">
      <BrainIcon />
      <div className="braindeployer_circle first">
        <LogOnIcon onClick={onClick} />
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
