// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import {
  Search,
  NeuronFavorites,
  TopicCard,
  NeuronSettings,
  TagsFavorites,
} from "@components";

import "./ProfilDisplay.scss";

export const ProfilDisplay = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //   const TabsList = [
  //     {
  //       id: 1,
  //       tab: "Neurons Favoris",
  //     },
  //     {
  //       id: 2,
  //       tab: "Topics Favoris",
  //     },
  //     {
  //       id: 3,
  //       tab: "Tags Favoris",
  //     },
  //     {
  //       id: 4,
  //       tab: "Messagerie",
  //     },
  //     {
  //       id: 5,
  //       tab: "Paramètres",
  //     },
  //   ];

  return (
    <div className="tabs_display">
      <div className="tabs_display__tabs">
        <button
          type="button"
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Neurons
        </button>

        <button
          type="button"
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Topics
        </button>
        <button
          type="button"
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tags
        </button>
        <button
          type="button"
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Messagerie
          {/* <MailOnIcon /> */}
        </button>
        <button
          type="button"
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Paramètres
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Mes neurons</h2>
          <hr />
          <NeuronFavorites />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Mes Topics</h2>
          <hr />
          <TopicCard />
          <hr />
          <Search />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Mes Tags</h2>
          <hr />
          <TagsFavorites />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <hr />
          <p />
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2> Paramètres</h2>
          <hr />
          <NeuronSettings />
        </div>
      </div>
    </div>
  );
};
