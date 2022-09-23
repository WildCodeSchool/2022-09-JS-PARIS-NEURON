/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { TopicCard } from "@components/TopicCard/TopicCard";
import Carousel from "react-grid-carousel";

import "./TopicsDisplay.scss";

export const TopicsDisplay = () => {
  const [Topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(1);

  useEffect(() => {
    setTopics([
      {
        id: 1,
        category: "issues",
      },
      {
        id: 2,
        category: "issues",
      },
      {
        id: 3,
        category: "issues",
      },
      {
        id: 4,
        category: "projects",
      },
      {
        id: 5,
        category: "projects",
      },
      {
        id: 6,
        category: "learning",
      },
      {
        id: 7,
        category: "learning",
      },
      {
        id: 8,
        category: "learning",
      },
      {
        id: 9,
        category: "learning",
      },
      {
        id: 10,
        category: "watch",
      },
      {
        id: 11,
        category: "watch",
      },
      {
        id: 12,
        category: "misc",
      },
      {
        id: 13,
        category: "issues",
      },
      {
        id: 14,
        category: "issues",
      },
      {
        id: 15,
        category: "issues",
      },
      {
        id: 16,
        category: "projects",
      },
      {
        id: 17,
        category: "projects",
      },
      {
        id: 18,
        category: "learning",
      },
      {
        id: 19,
        category: "learning",
      },
      {
        id: 20,
        category: "learning",
      },
      {
        id: 21,
        category: "learning",
      },
      {
        id: 22,
        category: "watch",
      },
      {
        id: 23,
        category: "watch",
      },
      {
        id: 24,
        category: "misc",
      },
    ]);
    setCategories([
      {
        id: 1,
        name: "issues",
        open: true,
      },
      {
        id: 2,
        name: "projects",
        open: false,
      },
      {
        id: 3,
        name: "learning",
        open: false,
      },
      {
        id: 4,
        name: "watch",
        open: false,
      },
      {
        id: 5,
        name: "misc",
        open: false,
      },
    ]);
  }, []);

  const TopicsList = [
    {
      breakpoint: 767,
      cols: 2,
      rows: 1,
      gap: 5,
      loop: true,
    },
  ];

  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <div
            className={
              open === category.id
                ? `categories_category_open`
                : `categories_category_close`
            }
            key={category.id}
          >
            <div
              className="categories_category_name"
              onClick={() => setOpen(category.id)}
            >
              {category.name}
            </div>
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
                      <div className="categories_category_content">
                        <TopicCard id={topic.id} />
                      </div>
                    </Carousel.Item>
                  );
                }
              )}
            </Carousel>
          </div>
        );
      })}
      <div className="test">bla</div>
    </div>
  );
};
