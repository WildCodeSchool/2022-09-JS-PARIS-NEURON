// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Search, NeuronFavorites } from "@components";
// import Carousel from "react-grid-carousel";

import "./ProfilDisplay.scss";
import { MailOnIcon } from "@assets/MailOnIcon";

export const ProfilDisplay = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  //   const TopicsList = [
  //     {
  //       breakpoint: 767,
  //       cols: 2,
  //       rows: 1,
  //       gap: 5,
  //       loop: true,
  //     },
  //   ];

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
          <MailOnIcon />
        </button>
        <button
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
          <NeuronFavorites />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p />
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
          <h2>Content 5</h2>
          <hr />
          <p />
        </div>
      </div>
      <Search />
    </div>
  );
};