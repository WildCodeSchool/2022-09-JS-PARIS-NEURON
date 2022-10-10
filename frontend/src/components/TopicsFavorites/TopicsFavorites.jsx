import { TopicCard } from "@components/index";
import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import {
  getTopicsFavorites,
  // addToTopicsFavorites,
  // removeFromTopicsFavorites,
} from "@services/apiRequest";
import "./TopicsFavorites.scss";

export const TopicsFavorites = () => {
  const [topics, setTopics] = useState([]);
  // const [isFavorite, setIsFavorite] = useState(false);
  // useEffect(() => {
  //   addToTopicsFavorites(setIsFavorite)
  // });

  // const toggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };
  useEffect(() => {
    getTopicsFavorites(setTopics);
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
          <Carousel.Item key={topic.id}>
            <div className="item">
              <TopicCard
                title={topic.title}
                summary={topic.summary}
                date={topic.date}
                id={topic.topics_id}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
