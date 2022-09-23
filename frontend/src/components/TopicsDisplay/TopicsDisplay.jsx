/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { TopicCard, Search } from "@components";
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
        category: "besoin d'aide",
      },
      {
        id: 2,
        category: "besoin d'aide",
      },
      {
        id: 3,
        category: "besoin d'aide",
      },
      {
        id: 4,
        category: "projets",
      },
      {
        id: 5,
        category: "projets",
      },
      {
        id: 6,
        category: "apprentissage",
      },
      {
        id: 7,
        category: "apprentissage",
      },
      {
        id: 8,
        category: "apprentissage",
      },
      {
        id: 9,
        category: "apprentissage",
      },
      {
        id: 10,
        category: "veille",
      },
      {
        id: 11,
        category: "veille",
      },
      {
        id: 12,
        category: "divers",
      },
      {
        id: 13,
        category: "besoin d'aide",
      },
      {
        id: 14,
        category: "besoin d'aide",
      },
      {
        id: 15,
        category: "besoin d'aide",
      },
      {
        id: 16,
        category: "projets",
      },
      {
        id: 17,
        category: "projets",
      },
      {
        id: 18,
        category: "apprentissage",
      },
      {
        id: 19,
        category: "apprentissage",
      },
      {
        id: 20,
        category: "apprentissage",
      },
      {
        id: 21,
        category: "apprentissage",
      },
      {
        id: 22,
        category: "veille",
      },
      {
        id: 23,
        category: "veille",
      },
      {
        id: 24,
        category: "divers",
      },
    ]);
    setCategories([
      {
        id: 1,
        name: "besoin d'aide",
        open: true,
      },
      {
        id: 2,
        name: "projets",
        open: false,
      },
      {
        id: 3,
        name: "apprentissage",
        open: false,
      },
      {
        id: 4,
        name: "veille",
        open: false,
      },
      {
        id: 5,
        name: "divers",
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
              mobileBreakpoint={376}
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
      <div className="filter">
        <Search placeholder="rechercher un topic" />
      </div>
    </div>
  );
};
