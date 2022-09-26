import React from "react";

import "./TopicCard.scss";

export const TopicCard = ({ title, summary, date, tag }) => {
  return (
    <div className="topicCard">
      <div className="topicCard_title">{title}</div>
      <div className="topicCard_summary">{summary}</div>
      <div className="topicCard_bottom">
        <div className="topicCard_bottom_date">{date}</div>
        <div className="topicCard_bottom_tag">{tag}</div>
      </div>
    </div>
  );
};
