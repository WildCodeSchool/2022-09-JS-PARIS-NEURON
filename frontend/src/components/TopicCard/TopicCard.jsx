import React from "react";
import { Link } from "react-router-dom";

import "./TopicCard.scss";

export const TopicCard = ({ title, summary, date, id }) => {
  console.warn(id);
  return (
    <div className="topicCard">
      <div className="topicCard_title">{title}</div>
      <div className="topicCard_summary">{summary}</div>
      <div className="topicCard_bottom">
        <div className="topicCard_bottom_date">{date}</div>
        <Link to={`/topic/${id}`}>
          <button type="button" className="topicCard_bottom_button">
            voir
          </button>
        </Link>
      </div>
    </div>
  );
};
