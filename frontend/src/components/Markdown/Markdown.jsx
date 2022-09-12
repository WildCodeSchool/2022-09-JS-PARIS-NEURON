import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.scss";

export const Markdown = () => {
  const [input, setInput] = useState("");

  return (
    <div className="markdown">
      <div className="preview">
        <ReactMarkdown className="markdown">{input}</ReactMarkdown>
      </div>
      <textarea
        type="text"
        className="editor"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
