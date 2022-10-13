import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "@components/";

import "./NeuronProfile.scss";
import { getNeuronById, sendPrivateMessage } from "@services/apiRequest";

export const NeuronProfile = () => {
  const { id } = useParams();

  const [token, setToken] = useState("");
  const [neuronInfos, setNeuronInfos] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUsername(localStorage.getItem("userName"));
    setUserId(localStorage.getItem("userId"));
    if (token) getNeuronById(token, id, setNeuronInfos);
  }, [token]);

  const handleFollow = () => {
    // addToFollowed(token, id);
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
      input
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
      </div>
    )
  );
};
