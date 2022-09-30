import React from "react";
import { Avatar, ButtonFavorite } from "@components/";
import "./NeuronCard.scss";

export const NeuronCard = () => {
  return (
    <div className="NeuronCard">
      <div className="NeuronCard__avatar">
        <ButtonFavorite />
        <Avatar />
      </div>
    </div>
  );
};
