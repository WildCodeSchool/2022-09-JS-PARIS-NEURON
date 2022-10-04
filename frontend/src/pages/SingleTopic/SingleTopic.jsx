import React from "react";
import { Navbar } from "@components";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "./SingleTopic.scss";

export const SingleTopic = () => {
  return (
    <div className="singleTopic">
      <div className="singleTopic_content">
        <div className="singleTopic_content_header">
          <h1 className="singleTopic_content_header_title">{}</h1>
          <h2 className="singleTopic_content_header_user">{}</h2>
          <h3 className="singleTopic_content_header_category">{}</h3>
          <span className="singleTopic_content_header_date">{}</span>
          <div className="singleTopic_content_header_tags">{}</div>
        </div>
        <div className="singleTopic_content_topic">
          <ReactMarkdown
            className="markdown"
            rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
          >
            {}
          </ReactMarkdown>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
