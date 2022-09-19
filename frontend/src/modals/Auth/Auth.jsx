import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AvatarContext } from "@contexts/AvatarContext";
import { register } from "@services/apiRequest";

import "./Auth.scss";

export const Auth = ({ show, hide }) => {
  const { avatarStatus, setAvatarStatus } = useContext(AvatarContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const chatId = uuidv4();

  const handleRegister = (e) => {
    e.preventDefault();
    register(username, password, mail, chatId);
    setAvatarStatus(!avatarStatus);
    hide();
  };

  return show ? (
    <div className="auth">
      <div className="auth_button">
        <form action="" onSubmit={(e) => handleRegister(e)}>
         <label htmlFor="username">Username</label>
          <input id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
         <label htmlFor="password">Password</label>
          <input id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         <label htmlFor="mail">Mail</label>
          <input id="mail"
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button type="submit" className="register">
            register
          </button>
        </form>
        <button type="button" className="login">
          login
        </button>
      </div>
    </div>
  ) : null;
};
