import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import { NeuronCard } from "@components/";
import "./NeuronList.scss";
import { getTagsFavoritesForNeurons } from "@services/apiRequest";

export const NeuronList = () => {
  const [neurons, setNeurons] = useState([]);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
    if (token) getTagsFavoritesForNeurons(token, userId, setNeurons);
  }, [token]);

  const neuronList = [
    {
      breakpoint: 767,
      cols: 3,
      rows: 1,
      gap: 2,
      loop: true,
    },
  ];

  return (
    <div className="carousel">
      {!neurons.length ? (
        <p className="carousel_missTag">
          suivez un ou plusieurs tags pour avoir des suggestions de neurons
        </p>
      ) : (
        <Carousel
          cols={2}
          rows={3}
          gap={10}
          responsiveLayout={neuronList}
          mobileBreakpoint={0}
          showDots
        >
          {neurons
            .filter((neuron) => neuron.id.toString() !== userId)
            .map((neuron) => (
              <Carousel.Item key={neuron.id}>
                <div className="item" title="suggestion de neuron">
                  <NeuronCard id={neuron.id} />
                  <p className="item_pseudo">{neuron.username}</p>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      )}
    </div>
  );
};
