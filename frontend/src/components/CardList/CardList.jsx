import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";

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
      breakpoint: 376,
      cols: 3,
      rows: 1,
      gap: 10,
      loop: true,
    },
    {
      breakpoint: 768,
      cols: 6,
      rows: 1,
      gap: 10,
      loop: true,
    },
    {
      breakpoint: 1440,
      cols: 10,
      rows: 1,
      gap: 10,
      loop: true,
    },
  ];

  return (
    <div className="carousel">
      <Carousel responsiveLayout={neuronList} mobileBreakpoint={0}>
        {neurons.map((neuron) => (
          <Carousel.Item key={neuron}>
            <img
              width="100%"
              src="https://www.abyssproject.net/wp-content/uploads/2014/06/panda-4-google.jpg"
              alt="bla"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
