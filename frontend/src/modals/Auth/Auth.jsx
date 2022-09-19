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

  const [inputs, setInputs] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    hide();
    setInputs({
      username,
      password,
      mail,
      chatId: uuidv4(),
    });
    register(inputs);
    setAvatarStatus(!avatarStatus);
  };

  return show ? (
    <div className="auth">
      <div className="auth_button">
        <form action="" onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
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
