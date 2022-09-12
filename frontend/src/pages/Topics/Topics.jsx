import React, { useState } from "react";
import { Navbar } from "@components/";
import ReactMarkdown from "react-markdown";

export const Topics = () => {
  const [input, setInput] = useState("");

  return (
    <div className="Topics">
      <div className="test">
        <div className="topic">
          <ReactMarkdown className="markdown">{input}</ReactMarkdown>
        </div>
        <input
          type="text"
          className="editor"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Navbar />
    </div>
  );
};
