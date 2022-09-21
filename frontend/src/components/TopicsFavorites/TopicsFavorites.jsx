import { TopicCard } from "@components/index";
import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import "./TopicsFavorites.scss";

export const TopicsFavorites = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setTopics([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]);
  }, []);

  const topicsFavList = [
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

  return (
    <div className="carousel">
      <Carousel
        cols={10}
        rows={1}
        gap={10}
        responsiveLayout={topicsFavList}
        mobileBreakpoint={0}
        showDots
      >
        {topics.map((topic) => (
          <Carousel.Item key={topics}>
            <div className="item">
              <TopicCard topic={topic} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
