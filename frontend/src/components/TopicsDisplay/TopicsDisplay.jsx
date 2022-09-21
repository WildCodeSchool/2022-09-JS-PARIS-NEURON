import React, { useEffect, useState } from "react";
import { TopicCard } from "@components/TopicCard/TopicCard";
import Carousel from "react-grid-carousel";

import "./TopicsDisplay.scss";

export const TopicsDisplay = () => {
  const [Topics, setTopics] = useState([]);

  useEffect(() => {
    setTopics([
      {
        id: 1,
        category: "Watch",
      },
      {
        id: 2,
        category: "Learning",
      },
      {
        id: 3,
        category: "Watch",
      },
    ]);
  }, []);

  const TopicsList = [
    {
      breakpoint: 767,
      cols: 4,
      rows: 2,
      gap: 2,
      loop: true,
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Watch",
    },
    {
      id: 2,
      name: "Learning",
    },
    {
      id: 3,
      name: "Projects",
    },
  ];

  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <div className="category" key={category.id}>
            <span>{category.name}</span>
            <Carousel
              cols={10}
              rows={1}
              gap={10}
              responsiveLayout={TopicsList}
              mobileBreakpoint={0}
              showDots
            >
              {Topics.filter((topic) => topic.category === category.name).map(
                (topic) => {
                  return (
                    <Carousel.Item key={topic.id}>
                      <TopicCard topic={topic} />
                    </Carousel.Item>
                  );
                }
              )}
            </Carousel>
          </div>
        );
      })}
    </div>
  );
};
