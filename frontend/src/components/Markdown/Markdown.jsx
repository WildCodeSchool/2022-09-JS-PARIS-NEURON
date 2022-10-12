import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "../../github.css";

import "./Markdown.scss";

export const Markdown = ({ input, setInput }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="markdown">
      <div className="preview">
        <ReactMarkdown
          className="markdown"
          linkTarget="_blank"
          rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
        >
          {input}
        </ReactMarkdown>
      </div>
      <Link to="/markdownsyntax" target="_blank">
        <span>syntax markdown</span>
      </Link>
      <textarea
        type="text"
        className="editor"
        placeholder="..."
        required
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
