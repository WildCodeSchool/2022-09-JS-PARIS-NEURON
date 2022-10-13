import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { getPrivateMessages } from "@services/apiRequest";

import "../../github.css";

import "./MailsDisplay.scss";

export const MailsDisplay = () => {
  const [mails, setMails] = useState([]);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
    if (token) getPrivateMessages(token, userId, setMails);
  }, [token]);

  return (
    <div className="privateMessages">
      {mails.length ? (
        mails.map((mail) => {
          return (
            <div key={mail.id} className="privateMessages_mail">
              <div className="privateMessages_mail_header">
                <Link to={`/neuronprofile/${mail.users_id}`}>
                  <span className="privateMessages_mail_header_user">
                    {mail.sender}
                  </span>
                </Link>{" "}
                a écrit:
              </div>
              <ReactMarkdown
                className="markdown"
                linkTarget="_blank"
                rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
              >
                {mail.content}
              </ReactMarkdown>
            </div>
          );
        })
      ) : (
        <span>pas de message pour l'instant</span>
      )}
    </div>
  );
};
