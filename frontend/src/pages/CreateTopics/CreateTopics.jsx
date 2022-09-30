import React, { useState } from "react";
import { Navbar, Markdown } from "@components/";

import "./CreateTopics.scss";

export const CreateTopics = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [singleTag, setSingleTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleHadCategorie = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSingleTag(e.target.value);
  };

  const handleHadTag = () => {
    setTags([...tags, `#${singleTag}`]);
  };

  const handleDelete = (tag) => {
    setTags(tags.filter((elem) => elem !== tag));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.warn("title: ", title);
  console.warn("category: ", category);
  console.warn("tags: ", tags);
  console.warn("content: ", content);

  return (
    <div className="createtopics">
      <form className="createtopics_form">
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
            <option value="problème">problème</option>
            <option value="projet">projet</option>
            <option value="apprentissage">apprentissage</option>
            <option value="veille">veille</option>
            <option value="divers">divers</option>
          </select>
        </div>
        <div className="createtopics_form_setTags">
          <label htmlFor="tag">tag(s):</label>
          <input
            id="tag"
            type="text"
            required
            value={singleTag}
            onChange={(e) => handleChange(e)}
          />
          <button type="button" onClick={() => handleHadTag()}>
            +
          </button>
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
          <Markdown input={content} setInput={setContent} />
        </div>
        <div className="createtopics_form_send">
          <button type="submit" onSubmit={(e) => handleSubmit(e)}>
            créer
          </button>
        </div>
      </form>
      <Navbar />
    </div>
  );
};
