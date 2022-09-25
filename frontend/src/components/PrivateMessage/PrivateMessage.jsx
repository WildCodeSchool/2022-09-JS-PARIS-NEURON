import React from "react";
import { Avatar, Markdown } from "@components";

export const PrivateMessage = () => {
  const Emails = [
    {
      id: 1,
      username: "Fufu",
      subject: "Test1",
      content:
        "Hi sweetlove ! How are you ? im fed up about all of this piece of shit can you help me about this problem please?",
    },
  ];
  return (
    <div className="privatemessage">
      {Emails.map((Email) => (
        <div key={Email}>
          <div className="privatemessage_header">
            <div className="privatemessage_avatarsender">
              {" "}
              <Avatar />
            </div>

            <span className="privatemessage_pseudosender">
              {Email.username}
            </span>
            <span className="privatemessage_subject">{Email.subject}</span>
          </div>
          <div className="privatemessage_content">
            <p className="content">{Email.content}</p>
          </div>
        </div>
      ))}
      <Markdown />
      <button type="submit" className="privatemessage_buttonsend">
        Send
      </button>
    </div>
  );
};
