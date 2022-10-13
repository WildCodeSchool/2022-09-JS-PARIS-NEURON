import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, Navbar } from "@components/";
import {
  getNeuronById,
  sendPrivateMessage,
  addToFollowed,
} from "@services/apiRequest";

import "./NeuronProfile.scss";

export const NeuronProfile = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [token, setToken] = useState("");
  const [neuronInfos, setNeuronInfos] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUsername(localStorage.getItem("userName"));
    setUserId(localStorage.getItem("userId"));
    const today = new Date();
    setDate(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    );
    if (token) getNeuronById(token, id, setNeuronInfos);
  }, [token]);

  const handleFollow = () => {
    addToFollowed(token, userId, id);
    navigate(`/userprofile/${userId}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendPrivateMessage(
      token,
      id,
      userId,
      neuronInfos[0].username,
      username,
      date,
      input,
      setInput
    );
  };

  return (
    neuronInfos.length && (
      <div className="neuronProfile">
        <div className="neuronProfile_header">
          <div className="neuronProfile_header_left">
            <Avatar />
            <span>{`${neuronInfos[0].username}` || `pseudo`}</span>
          </div>
          <div className="neuronProfile_header_right">
            <button type="button" onClick={() => handleFollow()}>
              suivre
            </button>
          </div>
        </div>
        <div className="neuronProfile_links">
          <span>Github: {neuronInfos[0].github}</span>
          <span>linkedin: {neuronInfos[0].linkedin}</span>
        </div>
        <form
          className="neuronProfile_mailEditor"
          onSubmit={(e) => handleSend(e)}
        >
          <label htmlFor="editor">envoyer un message privé:</label>
          <Link to="/markdownsyntax" target="_blank">
            <span>syntax markdown</span>
          </Link>
          <textarea
            name="editor"
            id="editor"
            value={input}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">envoyer</button>
        </form>
        <Navbar />
      </div>
    )
  );
};
