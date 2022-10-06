import React from "react";
import { Avatar, ButtonFavorite } from "@components/";
import "./NeuronCard.scss";

export const NeuronCard = () => {
  // user.map((user) => {
  //   const ismarked = marks.includes(user.id);
  return (
    <>
      <div className="NeuronCard">
        <div className="NeuronCard__avatar">
          <ButtonFavorite />
          <Avatar />
        </div>
      </div>
      {/* <div key={user.id} className={`user ${ismarked ? "marked" : ""}`}>
        <div>{user.username}</div>
        <button onClick={togglemark(user.id)}>
          {ismarked ? "Remove from marks" : "Add to marks"}
        </button>
      </div> */}
    </>
  );
};
