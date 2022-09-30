import React from "react";
import { Avatar } from "@components";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export const PrivateMessage = ({ username, subject, content }) => {
  return (
    <div className="privatemessage">
      <div className="privatemessage_header">
        <div className="privatemessage_avatarsender">
          {" "}
          <Avatar />
        </div>

        <span className="privatemessage_pseudosender">{username}</span>
        <span className="privatemessage_subject">{subject}</span>
      </div>
      <div className="privatemessage_content">
        <p className="content">{content}</p>
      </div>

      <ReactMarkdown
        className="markdown"
        rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
      >
        {/* {input} */}
      </ReactMarkdown>
    </div>
  );
};
