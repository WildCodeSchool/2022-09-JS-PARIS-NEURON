/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, ButtonAddToFavorite } from "@components";
import { useParams } from "react-router";
import {
  getTopicById,
  getComments,
  postComment,
  addTagsFavorites,
  getTagsFavorites,
  updateComment,
} from "@services/apiRequest";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "../../github.css";

import "./SingleTopic.scss";

export const SingleTopic = () => {
  const { id } = useParams();

  const [topic, setTopic] = useState([]);
  const [taglist, setTaglist] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [date, setDate] = useState("");
  const [favorite, setFavorite] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [isShowing, setIsShowing] = useState(0);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    setToken(localStorage.getItem("token"));
    getTopicById(id, setTopic, setTaglist, setComments);
    getTagsFavorites(setFavorite);
    getComments(id, setComments);
    localStorage.removeItem("topicId");
    const today = new Date();
    setDate(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    );
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setCommentContent(e.target.value);
  };

  const handleAddTag = () => {
    addTagsFavorites(localStorage.getItem("token"), favorite);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(
      token,
      commentContent,
      date,
      id,
      userId,
      setComments,
      setCommentContent
    );
    setCommentContent("");
  };

  const handleToggle = (commentId) => {
    if (isShowing !== commentId) {
      setIsShowing(commentId);
    } else {
      setIsShowing(0);
    }
  };

  const handleUpdate = (e, comment) => {
    e.preventDefault();
    updateComment(
      token,
      comment.commentId,
      commentContent,
      id,
      setComments,
      setCommentContent,
      setIsShowing
    );
  };

  console.warn(isShowing);

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
              <div className="singleTopic_content_header_bottom_right">
                <h4 className="singleTopic_content_header_bottom_right_user">
                  neuron:{" "}
                  <Link to={`/neuronprofile/${topic.users_id}`}>
                    <span>{topic.username}</span>
                  </Link>
                </h4>

                <h4 className="singleTopic_content_header_bottom_right_category">
                  {`cat. ${topic.name}`}
                </h4>
              </div>
            </div>
            <div className="singleTopic_content_header_tags">
              <span>tag(s):</span>
              <div className="singleTopic_content_header_tags_tagList">
                {taglist.map((tag) => (
                  <div key={tag.id}>
                    <div>{tag.tag}</div>
                    <ButtonAddToFavorite onClick={() => handleAddTag()} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ReactMarkdown
            className="markdown"
            linkTarget="_blank"
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
                    key={singleComment.commentId}
                    className="singleTopic_content_comments_singleComment"
                  >
                    <div className="singleTopic_content_comments_singleComment_header">
                      le <span>{singleComment.date_comment} </span>
                      <Link to={`/neuronprofile/${singleComment.userId}`}>
                        <span className="singleTopic_content_comments_singleComment_header_user">
                          {singleComment.username}
                        </span>
                      </Link>{" "}
                      a écrit:
                    </div>
                    <ReactMarkdown
                      className="markdown"
                      linkTarget="_blank"
                      rehypePlugins={[
                        [rehypeHighlight, { ignoreMissing: true }],
                      ]}
                    >
                      {singleComment.comment}
                    </ReactMarkdown>
                    {singleComment.userId === parseInt(userId, 10) ? (
                      <button
                        className="singleTopic_content_comments_singleComment_edit"
                        type="button"
                        onClick={() => handleToggle(singleComment.commentId)}
                      >
                        éditer
                      </button>
                    ) : null}
                    <form
                      className={
                        isShowing === singleComment.commentId
                          ? "singleTopic_content_comments_singleComment_editor show"
                          : "singleTopic_content_comments_singleComment_editor hide"
                      }
                      onSubmit={(e) => handleUpdate(e, singleComment)}
                    >
                      <div>
                        <Link to="/markdownsyntax" target="_blank">
                          <span>syntax markdown</span>
                        </Link>
                        <textarea
                          className="singleTopic_content_comments_editor_input"
                          name="editor"
                          id="editor"
                          placeholder="nouveau commentaire..."
                          value={commentContent}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <button
                        className="singleTopic_content_comments_editor_button"
                        type="submit"
                      >
                        envoyer
                      </button>
                    </form>
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
                <div>
                  <Link to="/markdownsyntax" target="_blank">
                    <span>syntax markdown</span>
                  </Link>
                  <textarea
                    className="singleTopic_content_comments_editor_input"
                    name="editor"
                    id="editor"
                    placeholder="nouveau commentaire..."
                    value={commentContent}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
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
