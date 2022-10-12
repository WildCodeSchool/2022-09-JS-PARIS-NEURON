import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import "./TagsFavorites.scss";
import { getTagsFavorites } from "@services/apiRequest";

export const TagsFavorites = () => {
  const [tags, setTags] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (token.length) {
      getTagsFavorites(token, setTags);
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
  console.warn(tags);
  return (
    <div className="carousel">
      <Carousel
        cols={10}
        rows={1}
        gap={10}
        responsiveLayout={tagsFavList}
        mobileBreakpoint={0}
        showDots
      >
        {tags.map((tag) => (
          <Carousel.Item key={tag.id}>
            <div className="item">{tag.name}</div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
