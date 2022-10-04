/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { TopicCard, Search } from "@components";
import Carousel from "react-grid-carousel";
import {
  getCategories,
  getTopics,
  getTopicsByTags,
} from "@services/apiRequest";

import "./TopicsDisplay.scss";

export const TopicsDisplay = () => {
  const [topics, setTopics] = useState([]);
  const [topicsByTags, setTopicsByTags] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(1);

  useEffect(() => {
    getCategories(setCategories);
    getTopics(setTopics);
  }, []);

  const handleChange = (e) => {
    setSearchTag(e.target.value);
  };

  const handleSearch = () => {
    setTopicsByTags([]);
    console.warn(searchTag);
    getTopicsByTags(searchTag, setTopicsByTags);
    setOpen(0);
  };

  const handleSwitch = (category) => {
    setTopicsByTags([]);
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
                          // tag={topic.tag}
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
          value={searchTag}
        />
      </div>
      <div className="categories_showByTags">
        {(topicsByTags.length && (
          <Carousel
            cols={10}
            rows={1}
            gap={10}
            responsiveLayout={TopicsList}
            mobileBreakpoint={376}
            showDots
          >
            {topicsByTags.map((topic) => {
              return (
                <Carousel.Item key={topic.id}>
                  <div className="categories_category_content">
                    <TopicCard
                      title={topic.title}
                      summary={topic.summary}
                      date={topic.date}
                      // tag={topic.tag}
                    />
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        )) ||
          (!topicsByTags.length && (
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
