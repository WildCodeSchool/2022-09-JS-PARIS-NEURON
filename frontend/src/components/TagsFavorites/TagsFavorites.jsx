import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import { getTagsFavorites, addTagsFavorites } from "@services/apiRequest";
import { ButtonRemoveFromFavorite } from "@components";
import "./TagsFavorites.scss";

export const TagsFavorites = () => {
  const [token, setToken] = useState("");
  const [usersId, setUsersId] = useState("");
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUsersId(localStorage.getItem("userId"));
  }, []);
  useEffect(() => {
    if (token.length) {
      getTagsFavorites(token, usersId, setTagList);
    }
  }, [token]);

  const handleChange = (e) => {
    e.preventDefault();
    setTag(e.target.value);
    console.warn(tag);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    addTagsFavorites(token, tag, usersId, setTagList);
    setTag("");
  };

  const tagsFavList = [
    {
      breakpoint: 720,
      cols: 3,
      rows: 4,
      gap: 2,
      loop: true,
    },
    {
      breakpoint: 1440,
      cols: 6,
      rows: 2,
      gap: 2,
      loop: true,
    },
    {
      breakpoint: 2160,
      cols: 10,
      rows: 1,
      gap: 2,
      loop: true,
    },
  ];
  console.warn(tagList, tag);

  return (
    <div className="taglist_container">
      <div className="carousel">
        {tagList.length && (
          <Carousel
            cols={10}
            rows={1}
            gap={10}
            responsiveLayout={tagsFavList}
            mobileBreakpoint={0}
            showDots
          >
            {tagList.map((tags) => (
              <Carousel.Item key={tags}>
                <div className="item">
                  <div>{tags.tag}</div>
                  <ButtonRemoveFromFavorite />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
      <form
        className="taglist_container_addtagtofavorites"
        onSubmit={(e) => handleAddTag(e)}
      >
        <label className="taglist_container_label">
          Ajouter un tag à votre liste de favoris:
          <input
            className="taglist_container_input"
            type="text"
            value={tag}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button className="taglist_container_buttontag" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
