/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { TopicCard, Search } from "@components";
import Carousel from "react-grid-carousel";
import {
  getCategories,
  getTopics,
  getTopicsByTitle,
} from "@services/apiRequest";

import "./TopicsDisplay.scss";

export const TopicsDisplay = () => {
  const [topics, setTopics] = useState([]);
  const [topicsByTitle, setTopicsByTitle] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(1);

  useEffect(() => {
    getCategories(setCategories);
    getTopics(setTopics);
  }, []);

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearch = () => {
    setTopicsByTitle([]);
    getTopicsByTitle(searchString, setTopicsByTitle);
    setOpen(0);
  };

  const handleSwitch = (category) => {
    setTopicsByTitle([]);
    setOpen(category.id);
  };

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
              onClick={() => handleSwitch(category)}
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
              {topics
                .filter((topic) => topic.categories_id === category.id)
                .map((topic) => {
                  return (
                    <Carousel.Item key={topic.id}>
                      <div className="categories_category_content">
                        <TopicCard
                          title={topic.title}
                          summary={topic.summary}
                          date={topic.date}
                          id={topic.topics_id}
                        />
                      </div>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
        );
      })}
      <div className="categories_filter">
        <Search
          placeholder="rechercher un topic"
          handleChange={handleChange}
          handleSearch={handleSearch}
          value={searchString}
        />
      </div>
      <div className="categories_showByTags">
        {(topicsByTitle.length && (
          <Carousel
            cols={10}
            rows={1}
            gap={10}
            responsiveLayout={TopicsList}
            mobileBreakpoint={376}
            showDots
          >
            {topicsByTitle.map((topic) => {
              return (
                <Carousel.Item key={topic.id}>
                  <div className="categories_category_content">
                    <TopicCard
                      title={topic.title}
                      summary={topic.summary}
                      date={topic.date}
                      id={topic.topics_id}
                    />
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        )) ||
          (!topicsByTitle.length && (
            <div
              className={
                !open
                  ? "categories_category_missing_visible"
                  : "categories_category_missing_hidden"
              }
            >
              <span>rien pour le moment...</span>
            </div>
          ))}
      </div>
    </div>
  );
};
