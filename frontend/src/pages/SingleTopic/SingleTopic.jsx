/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "@components";
import { useParams } from "react-router";
import { getTopicById, getComments, postComment } from "@services/apiRequest";
import { messageContext } from "@contexts/messageContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github.css";

import "./SingleTopic.scss";

export const SingleTopic = () => {
  const { id } = useParams();

  const { setMessage } = useContext(messageContext);

  const [topic, setTopic] = useState([]);
  const [taglist, setTaglist] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    getTopicById(id, setTopic, setTaglist, setComments);
    getComments(id, setComments);
    localStorage.removeItem("topicId");
    const today = new Date();
    setDate(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    );
  }, [postComment()]);

  const handleChange = (e) => {
    e.preventDefault();
    setCommentContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(
      localStorage.getItem("token"),
      commentContent,
      date,
      id,
      localStorage.getItem("userId"),
      setMessage
    );
    setCommentContent("");
    setTimeout(() => {
      window.location.reload(false);
    }, 1500);
  };

  console.warn("comments: ", comments);
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
            <div className="singleTopic_content_header_tags">
              <span>tags:</span>
              {taglist.map((tag) => (
                <div>{tag.tag}</div>
              ))}
            </div>
          </div>
          <ReactMarkdown
            className="markdown"
            rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
          >
            {topic.topic}
          </ReactMarkdown>
          <div className="singleTopic_content_comments">
            <span className="singleTopic_content_comments_title">
              commentaires:{" "}
            </span>
            {comments.length ? (
              comments.map((singleComment) => {
                return (
                  <div
                    key={singleComment.id}
                    className="singleTopic_content_comments_singleComment"
                  >
                    <div className="singleTopic_content_comments_singleComment_header">
                      <span>le {singleComment.date_comment} </span>
                      <span>{singleComment.username} a écrit:</span>
                    </div>
                    <ReactMarkdown
                      className="markdown"
                      rehypePlugins={[
                        [rehypeHighlight, { ignoreMissing: true }],
                      ]}
                    >
                      {singleComment.comment}
                    </ReactMarkdown>
                  </div>
                );
              })
            ) : (
              <span className="singleTopic_content_comments_nothing">
                rien pour le moment
              </span>
            )}
            {localStorage.getItem("token") ? (
              <form
                className="singleTopic_content_comments_editor"
                onSubmit={(e) => handleSubmit(e)}
              >
                <textarea
                  className="singleTopic_content_comments_editor_input"
                  name="editor"
                  id="editor"
                  placeholder="nouveau commentaire..."
                  value={commentContent}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <button
                  className="singleTopic_content_comments_editor_button"
                  type="submit"
                >
                  envoyer
                </button>
              </form>
            ) : null}
          </div>
        </div>
        <Navbar />
      </div>
    )
  );
};
