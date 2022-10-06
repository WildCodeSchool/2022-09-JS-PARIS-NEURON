import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github.css";

import "./TopicCard.scss";

export const TopicCard = ({ title, summary, date, id }) => {
  return (
    <div className="topicCard">
      <div className="topicCard_title">{title}</div>
      <div className="topicCard_summary">
        <ReactMarkdown
          className="markdown"
          rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
        >
          {summary}
        </ReactMarkdown>
      </div>
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
