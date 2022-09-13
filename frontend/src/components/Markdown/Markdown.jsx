import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github.css";

import "./Markdown.scss";

export const Markdown = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="markdown">
      <div className="preview">
        <ReactMarkdown
          className="markdown"
          rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
        >
          {input}
        </ReactMarkdown>
      </div>
      <textarea
        type="text"
        className="editor"
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
