import React, { useState, useEffect } from "react";
import axios from "axios";

import "./NeuronSettings.scss";

export const NeuronSettings = () => {
  const initialValues = {
    pseudo: "",
    new_pseudo: "",
    password: "",
    new_password: "",
    mail: "",
    new_email: "",
    linkedin: "",
    github: "",
    description: "",
  };

  const [inputs, setInputs] = useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:5000/settings`,
        {
          token: `${token}`,
          ...inputs,
        },
        {
          withCredentials: true,
          headers: {
            "x-xsrf-token": `${token}`,
          },
        }
      )
      .then(({ data }) => {
        if (data.xsrfToken) {
          localStorage.setItem("token", data.xsrfToken);
        }
        console.warn(data.message);
      })
      .catch((err) => {
        console.warn(err.response.data);
      });
  }

  function updateInputs(event) {
    setInputs({
      ...inputs, // récupère les anciennes valeurs
      [event.target.name]: event.target.value,
    });
  }

  // { clé: "valeur" }
  // Faire un objet qui contient des champs avec les clé égales au names
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:5000/user_settings?isSettings=${true}`, {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      })
      .then((res) => {
        setInputs({
          ...inputs,
          pseudo: res.data.username || "",
          mail: res.data.mail || "",
          linkedin: res.data.linkedin || "",
          github: res.data.github || "",
          description: res.data.description || "",
        });
      });
  }, []);
  return (
    <div>
      <div className="form_container">
        <label htmlFor="pseudo"> Pseudo: </label>
        <input
          id="pseudo"
          name="pseudo"
          type="text"
          minLength={3}
          maxLength={10}
          title="entre 3 et 10 caractères"
          value={inputs.pseudo}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="new_pseudo"> New Pseudo </label>
        <input
          id="new_pseudo"
          name="new_pseudo"
          type="text"
          value={inputs.new_pseudo}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="password"> Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          minLength={8}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
          title="entre 8 et 20 caractères. au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial"
          value={inputs.password}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="new_password"> New Password </label>
        <input
          id="new_password"
          name="new_password"
          type="password"
          value={inputs.new_password}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="mail"> Mail@adress: </label>
        <input
          id="mail"
          name="mail"
          type="email"
          value={inputs.mail}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="new_email"> New Mail@adress: </label>
        <input
          id="new_email"
          name="new_email"
          type="email"
          value={inputs.new_email}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="linkedin"> Linkedin: </label>
        <input
          id="linkedin"
          name="linkedin"
          type="text:"
          value={inputs.linkedin}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="github"> Github: </label>
        <input
          id="github"
          name="github"
          type="text"
          value={inputs.github}
          onChange={(e) => updateInputs(e)}
        />

        <label htmlFor="descript">Description:</label>
        <textarea
          id="descript"
          name="description"
          rows="4"
          cols="50"
          value={inputs.description}
          onChange={(e) => updateInputs(e)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Send
        </button>
      </div>
    </div>
  );
};
