import React, { useEffect, useState } from "react";
import { Navbar, Markdown } from "@components/";
import { postTopic } from "@services/apiRequest";
import { v4 as uuidv4 } from "uuid";

import "./CreateTopics.scss";

export const CreateTopics = () => {
  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [summary, setSummary] = useState("");
  const [chatId, setChatId] = useState("");
  const [date, setDate] = useState("");
  const [categorieId, setCategorieId] = useState(0);
  const [singleTag, setSingleTag] = useState("");
  const [tags, setTags] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setChatId(uuidv4());
    const today = new Date();
    setDate(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`);
  }, []);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleHadCategorie = (e) => {
    e.preventDefault();
    setCategorieId(parseInt(e.target.value, 10));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSingleTag(e.target.value);
  };

  const handleHadTag = () => {
    setTags([...tags, `#${singleTag}`]);
    setSingleTag("");
  };

  const handleDelete = (tag) => {
    setTags(tags.filter((elem) => elem !== tag));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSummary(topic.slice(0, 255));
    setUserId(1);
    postTopic(
      token,
      title,
      topic,
      summary,
      chatId,
      date,
      categorieId,
      tags,
      userId
    );
  };

  console.warn("title: ", title);
  console.warn("topic: ", topic);
  console.warn("summary: ", summary);
  console.warn("chatId", chatId);
  console.warn("date: ", date);
  console.warn("categorieId: ", categorieId);
  console.warn("tags: ", tags);
  console.warn("userId: ", userId);

  return (
    <div className="createtopics">
      <form className="createtopics_form" onSubmit={(e) => handleSubmit(e)}>
        <div className="createtopics_form_title">
          <label htmlFor="title">Titre:</label>
          <input
            id="title"
            type="text"
            required
            onChange={(e) => handleChangeTitle(e)}
          />
        </div>
        <div className="createtopics_form_categories">
          <label htmlFor="categories">catégorie:</label>
          <select
            name="categories"
            id="categories"
            required
            onChange={(e) => handleHadCategorie(e)}
          >
            <option value="">...</option>
            <option value="1">problème</option>
            <option value="2">projet</option>
            <option value="3">apprentissage</option>
            <option value="4">veille</option>
            <option value="5">divers</option>
          </select>
        </div>
        <div className="createtopics_form_setTags">
          <label htmlFor="tag">tag(s):</label>
          <div className="createtopics_form_setTags_input">
            <input
              id="tag"
              type="text"
              value={singleTag}
              onChange={(e) => handleChange(e)}
            />

            <button type="button" onClick={() => handleHadTag()}>
              +
            </button>
          </div>
        </div>
        <div className="createtopics_form_tags">
          {tags.map((tag) => (
            <div key={tag} className="createtopics_form_tags_single">
              <p>{tag}</p>
              <button type="button" onClick={() => handleDelete(tag)}>
                X
              </button>
            </div>
          ))}
        </div>
        <hr />
        <div className="createtopics_form_editor">
          <Markdown input={topic} setInput={setTopic} />
        </div>
        <div className="createtopics_form_send">
          <button type="submit">créer</button>
        </div>
      </form>
      <Navbar />
    </div>
  );
};
