import React, { useState } from "react";

import "./Search.scss";

export const Search = ({ placeholder, setSearchTag, handleSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    setSearchTag(input);
    setInput("");
  };

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="search_text"
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <button className="search_send" type="submit">
        send
      </button>
    </form>
  );
};
