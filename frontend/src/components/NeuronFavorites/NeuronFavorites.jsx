import { NeuronCard, Search } from "@components/index";
import Carousel from "react-grid-carousel";
import React, { useEffect, useState } from "react";
import { getFollowed } from "@services/apiRequest";
import "./NeuronFavorites.scss";

export const NeuronFavorites = () => {
  const [neurons, setNeurons] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [id, setId] = useState(0);
  const [token, setToken] = useState("");
  // const [usersById, setUsersById] = useState([]);
  // const handleSearch = () => {
  //   getUsersById(setUsersById);
  // };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    if (token.length) getFollowed(token, id, setNeurons);
  }, [token]);

  console.warn(token);
  console.warn(searchUser);

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
  console.warn(neurons);
  return (
    <div className="carousel">
      <Carousel
        cols={5}
        rows={4}
        gap={5}
        responsiveLayout={neuronFavList}
        mobileBreakpoint={0}
        showDots
      >
        {neurons.map((neuron) => (
          <Carousel.Item key={neuron}>
            <div className="item">
              <NeuronCard />
              <span className="item_pseudo">{neuron.username}</span>
              {/* <button type="button" onClick={() => handleDelete}> */}
              {/* Supprimer
              </button> */}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="users_filter">
        <Search
          placeholder="rechercher un Neuron"
          content={setSearchUser}
          // handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};
