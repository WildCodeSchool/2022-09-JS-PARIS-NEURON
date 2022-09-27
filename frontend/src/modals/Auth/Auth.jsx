import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AvatarContext } from "@contexts/AvatarContext";
import { register, login, logout } from "@services/apiRequest";

import "./Auth.scss";

export const Auth = ({ show, hide }) => {
  // eslint-disable-next-line no-unused-vars
  const { avatarStatus, setAvatarStatus } = useContext(AvatarContext);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isToken, setIsToken] = useState(false);

  console.warn(
    "first render: ",
    localStorage.getItem("token"),
    "token: ",
    token
  );

  useEffect(() => {
    if (token) {
      setIsToken(true);
      setAvatarStatus(true);
    } else {
      setIsToken(false);
      setAvatarStatus(false);
    }
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [chatId, setChatId] = useState("");

  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setChatId(uuidv4());
    register(username, password, mail, chatId);
    hide();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginMail, loginPassword);
    setToken(localStorage.getItem("token"));
    console.warn("login: ", token, localStorage.getItem("token"));
    setIsToken(true);
    setAvatarStatus(true);
    hide();
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    logout(token);
    setToken(localStorage.getItem("token"));
    console.warn("logout: ", token, localStorage.getItem("token"));
    setIsToken(false);
    setAvatarStatus(false);
    hide();
  };

  return show ? (
    <div className="auth">
      {!isToken ? (
        <div className="auth_content">
          <div className="auth_content_close">
            <button
              className="auth_content_close_button"
              type="button"
              onClick={() => hide()}
            >
              retour
            </button>
          </div>
          <div className="auth_content_form">
            <form
              className="auth_content_form_register auth_content_form_single"
              action=""
              onSubmit={(e) => handleRegister(e)}
            >
              <label htmlFor="username">
                pseudo<span>*</span>{" "}
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="mail">
                adresse mail<span>*</span>{" "}
              </label>
              <input
                id="mail"
                type="email"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <label htmlFor="password">
                mot de passe<span>*</span>{" "}
              </label>
              <input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="auth_content_form_single_submit register"
                type="submit"
              >
                créer un compte
              </button>
            </form>
            <hr />
            <form
              className="auth_content_form_login auth_content_form_single"
              action=""
              onSubmit={(e) => handleLogin(e)}
            >
              <label htmlFor="loginMail">
                adresse mail<span>*</span>{" "}
              </label>
              <input
                id="loginMail"
                type="email"
                required
                value={loginMail}
                onChange={(e) => setLoginMail(e.target.value)}
              />
              <label htmlFor="loginPassword">
                mot de passe<span>*</span>{" "}
              </label>
              <input
                id="loginPassword"
                type="password"
                required
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button
                className="auth_content_form_single_submit login"
                type="submit"
              >
                se connecter
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="auth_content_logout">
          <div className="auth_content_close">
            <button
              className="auth_content_close_button"
              type="button"
              onClick={() => hide()}
            >
              retour
            </button>
          </div>
          <button
            className="auth_content_logout_submit"
            type="button"
            onClick={() => handleLogOut()}
          >
            se déconnecter
          </button>
        </div>
      )}
    </div>
  ) : null;
};
