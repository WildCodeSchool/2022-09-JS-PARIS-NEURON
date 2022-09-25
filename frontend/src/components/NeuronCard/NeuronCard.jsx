// import React, { useState } from "react";
import { Avatar } from "@components/";
import "./NeuronCard.scss";

export const NeuronCard = () => {
  //   const [isFavorite, setIsFavorite] = useState(false);
  //   function handleClickFavorite() {
  //     setIsFavorite(!isFavorite);
  //   }

  return (
    <div className="NeuronCard">
      {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      {/* <div className={isFavorite ? "isFavorite" : "notFavorite"}>
        <img
          src="frontend/src/assets/images/emptyHeart.png"
          id="favorite"
          onClick={handleClickFavorite}
          alt="heart"
        />
      </div> */}
      <Avatar />
    </div>
  );
};
