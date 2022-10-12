import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import { getTagsFavorites } from "@services/apiRequest";
import "./TagsFavorites.scss";

export const TagsFavorites = () => {
  const [token, setToken] = useState("");
  const [usersId, setUsersId] = useState("");
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUsersId(localStorage.getItem("userId"));

  }, []);
console.warn(usersId);
  useEffect(() => {
    if (token.length) {
      getTagsFavorites(token, usersId, setTagList);
    }
  }, [token]);

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
  console.warn(tagList);
  return (
    <div className="taglist_container">
    <div className="carousel">
      <Carousel
        cols={10}
        rows={1}
        gap={10}
        responsiveLayout={tagsFavList}
        mobileBreakpoint={0}
        showDots
      >
        {tagList.map((tag) => (
          <Carousel.Item key={tag.id}>
            <div className="item">{tag.tag}</div>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      <form className= "taglist_container_addtagtofavorites">
        <label> 
          Ajouter un tag à votre liste de favoris:
          <input className="taglist_container_input" type="text" />
          </label>
          <button type="button">Ajouter</button>
      </form>
    </div>
  );
};
