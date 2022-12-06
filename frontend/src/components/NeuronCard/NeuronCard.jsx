import React from "react";
import { Avatar } from "@components/";
import "./NeuronCard.scss";
import { Link } from "react-router-dom";

export const NeuronCard = ({ id }) => {
  return (
    <div className="NeuronCard">
      <Link to={`/neuronprofile/${id}`}>
        <Avatar />
      </Link>
    </div>
  );
};
