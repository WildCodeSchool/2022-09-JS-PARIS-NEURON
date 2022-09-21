import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AvatarContext } from "@contexts/AvatarContext";
import { register, login } from "@services/apiRequest";

import "./Auth.scss";

export const Auth = ({ show, hide }) => {
  const { avatarStatus, setAvatarStatus } = useContext(AvatarContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const chatId = uuidv4();

  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    register(username, password, mail, chatId);
    setAvatarStatus(!avatarStatus);
    hide();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginMail, loginPassword);
    setAvatarStatus(!avatarStatus);
    hide();
  };

  return show ? (
    <div className="auth">
      <div className="auth_button">
      <div className="auth_button_close">
      <button type="button"  onClick={()=> hide()}>X</button>
      </div>
      <div className="auth_form">
        <form
          className="auth_form_register auth_form_single"
          action=""
          onSubmit={(e) => handleRegister(e)}
        >
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="mail">Mail</label>
          <input
            id="mail"
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button type="submit" className="register">
            Register
          </button>
        </form>
        <form className="auth_form_login auth_form_single" action="" onSubmit={(e) => handleLogin(e)}>
          <label htmlFor="loginMail">Mail</label>
          <input
            id="loginMail"
            type="text"
            value={loginMail}
            onChange={(e) => setLoginMail(e.target.value)}
          />
          <label htmlFor="loginPassword">Password</label>
          <input
            id="loginPassword"
            type="text"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button type="submit" className="login">
            Login
          </button>
        </form>
        </div>
      </div>
    </div>
  ) : null;
};
