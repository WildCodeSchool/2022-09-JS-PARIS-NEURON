import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import {
  getTagsFavorites,
  addTagsFavorites,
  removeFromTagsFavorites,
} from "@services/apiRequest";
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
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    addTagsFavorites(token, tag, usersId, setTagList);
    setTag("");
  };

  const handleDeleteTag = (tagId) => {
    console.warn(tagId);
    removeFromTagsFavorites(token, usersId, tagId, setTagList);
  };

  const tagsFavList = [
    {
      breakpoint: 720,
      cols: 2,
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
  console.warn(tagList);
  return (
    <div className="taglist_container">
      <div className="carousel">
        {tagList.length && tagList.length ? (
          <Carousel
            cols={10}
            rows={2}
            gap={10}
            responsiveLayout={tagsFavList}
            mobileBreakpoint={0}
            showDots
          >
            {tagList.map((tags) => {
              return (
                <Carousel.Item key={tags.id}>
                  <div className="item">
                    <div>
                      <strong>{tags.tag}</strong>{" "}
                      <button
                        type="button"
                        onClick={() => handleDeleteTag(tags.id)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <div className="pasdefav">
            <p>Pas de Tags</p>
          </div>
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
