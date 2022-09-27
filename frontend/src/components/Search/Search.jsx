import React from "react";

import "./Search.scss";

export const Search = ({ placeholder, handleChange, handleSearch, value }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="search_text"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <button className="search_send" type="submit">
        send
      </button>
    </form>
  );
};
