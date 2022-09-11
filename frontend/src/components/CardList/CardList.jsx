import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import { NeuronCard } from "@components/";
import "./CardList.scss";

export const CardList = () => {
  const [neurons, setNeurons] = useState([]);

  useEffect(() => {
    setNeurons([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]);
  }, []);

  const neuronList = [
    {
      breakpoint: 767,
      cols: 3,
      rows: 1,
      gap: 2,
      loop: true,
    },
    {
      breakpoint: 1439,
      cols: 6,
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
        responsiveLayout={neuronList}
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
  );
};
