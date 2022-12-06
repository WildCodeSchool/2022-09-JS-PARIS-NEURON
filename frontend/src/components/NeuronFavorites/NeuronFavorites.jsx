import { NeuronCard } from "@components/index";
import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import {
  getFollowed,
  getUsersByIds,
  removeFromFollowed,
} from "@services/apiRequest";

import "./NeuronFavorites.scss";

export const NeuronFavorites = () => {
  const [neurons, setNeurons] = useState([]);
  const [id, setId] = useState(0);
  const [idList, setIdList] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    if (token.length) {
      getFollowed(token, id, setIdList);
    }
  }, [token]);

  useEffect(() => {
    if (idList.length) {
      getUsersByIds(token, idList, setNeurons);
    }
  }, [idList]);

  const handleDelete = (neuron) => {
    removeFromFollowed(token, id, neuron.id, setIdList);
    setNeurons(neurons.filter((elem) => elem.id !== neuron.id));
  };

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
    <div className="carousel">
      {neurons && neurons.length ? (
        <Carousel
          cols={5}
          rows={4}
          gap={5}
          responsiveLayout={neuronFavList}
          mobileBreakpoint={0}
          showDots
        >
          {neurons.map((neuron) => {
            return (
              <Carousel.Item key={neuron}>
                <div className="item">
                  <NeuronCard />
                  <span className="item_pseudo">{neuron.username}</span>
                  <button type="button" onClick={() => handleDelete(neuron)}>
                    Supprimer
                  </button>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <div>
          <p>Pas de neurones favoris 🙁</p>
        </div>
      )}
    </div>
  );
};
