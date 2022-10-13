import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { getPrivateMessages, deletePrivateMessage } from "@services/apiRequest";

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

  const handleRemove = (id) => {
    deletePrivateMessage(token, id, userId, setMails);
  };

  return (
    <div className="privateMessages">
      {mails.length ? (
        mails.map((mail) => {
          return (
            <div
              key={mail.private_messages_id}
              className="privateMessages_mail"
            >
              <div className="privateMessages_mail_header">
                le <span>{mail.date_message} </span>
                <Link to={`/neuronprofile/${mail.neuron_id}`}>
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
              <button
                className="privateMessages_mail_remove"
                type="button"
                onClick={() => handleRemove(mail.private_messages_id)}
              >
                supprimer
              </button>
            </div>
          );
        })
      ) : (
        <span>pas de message pour l'instant</span>
      )}
    </div>
  );
};
