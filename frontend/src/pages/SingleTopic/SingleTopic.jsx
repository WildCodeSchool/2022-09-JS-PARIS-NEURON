import React, { useEffect, useState } from "react";
import { Navbar } from "@components";
import { useParams } from "react-router";
import { getTopicById } from "@services/apiRequest";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github.css";

import "./SingleTopic.scss";

export const SingleTopic = () => {
  const { id } = useParams();

  const [topic, setTopic] = useState([]);
  const [taglist, setTaglist] = useState([]);

  useEffect(() => {
    getTopicById(id, setTopic, setTaglist);
    localStorage.removeItem("topicId");
  }, []);

  console.warn(taglist);

  return (
    topic && (
      <div className="singleTopic">
        <div className="singleTopic_content">
          <div className="singleTopic_content_header">
            <div className="singleTopic_content_header_top">
              <h3 className="singleTopic_content_header_title">
                {topic.title}
              </h3>
            </div>
            <div className="singleTopic_content_header_bottom">
              <div className="singleTopic_content_header_bottom_left">
                <span className="singleTopic_content_header_bottom_left_date">
                  {topic.date}
                </span>
              </div>
              <div className="singleTopic_content_header_bottomright">
                <h4 className="singleTopic_content_header_bottom_right_user">{`neuron: ${topic.users_id}`}</h4>
                <h4 className="singleTopic_content_header_bottom_right_category">
                  {`categorie: ${topic.categories_id}`}
                </h4>
              </div>
            </div>
            <div className="singleTopic_content_header_tags">{}</div>
          </div>
          <ReactMarkdown
            className="markdown"
            rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
          >
            {topic.topic}
          </ReactMarkdown>
        </div>
        <Navbar />
      </div>
    )
  );
};
