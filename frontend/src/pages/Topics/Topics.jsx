import React from "react";
import { TopicsDisplay } from "@components/TopicsDisplay/TopicsDisplay";
import { Navbar } from "@components/";

export const Topics = () => {
  return (
    <div className="Topics">
      <TopicsDisplay />
      <Navbar />
    </div>
  );
};
