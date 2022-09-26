import { NeuronCard } from "@components/index";
import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import "./NeuronFavorites.scss";

export const NeuronFavorites = () => {
  const [neurons, setNeurons] = useState([]);
  // const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    setNeurons([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]);
  }, []);

  const neuronFavList = [
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
    <>
      <div className="users_filter">
        {/* <Search
          placeholder="rechercher un topic"
          content={setSearchUser}
          handleSearch={handleSearch}
        /> */}
      </div>

      <div className="carousel">
        <Carousel
          cols={10}
          rows={1}
          gap={10}
          responsiveLayout={neuronFavList}
          mobileBreakpoint={0}
          showDots
        >
          {neurons.map((neuron) => (
            <Carousel.Item key={neuron}>
              <div className="item">
                <NeuronCard />
                <span className="item_pseudo">pseudo</span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};
