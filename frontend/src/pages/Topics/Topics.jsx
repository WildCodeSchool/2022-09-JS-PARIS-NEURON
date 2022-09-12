import React from "react";
import { Markdown, Navbar } from "@components/";
import "./Topics.scss";

export const Topics = () => {
  return (
    <div className="topics">
      <div className="topics_content">
        <Markdown />
      </div>
      <Navbar />
    </div>
  );
};
