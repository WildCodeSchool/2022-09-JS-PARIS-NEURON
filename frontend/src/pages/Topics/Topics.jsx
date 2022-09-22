import React from "react";
// import { TopicsDisplay } from "@components/TopicsDisplay/TopicsDisplay";
import { Navbar, TopicsDisplay } from "@components/";

import "./Topics.scss";

export const Topics = () => {
  return (
    <div className="topics">
      <TopicsDisplay />
      <Navbar />
    </div>
  );
};
