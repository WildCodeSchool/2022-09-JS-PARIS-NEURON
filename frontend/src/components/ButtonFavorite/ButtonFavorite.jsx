import React, { useState, useEffect } from "react";
import FullRedHeart from "@assets/images/FullRedHeart.png";
import EmptyHeart from "@assets/images/emptyHeart.png";
// import { postFavorite, deleteFavorite } from "@services/apiRequest";
import "./ButtonFavorite.scss";

export const ButtonFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  // const handleFavorite = () => {
  //   e.preventDefault();
  //   if (isFavorite) {
  //     setIsFavorite(false);
  //     deleteFavorite();
  //   } else {
  //     setIsFavorite(true);
  //     postFavorite();
  //   }
  // };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {}, [isFavorite]);

  return (
    <div
      aria-hidden="true"
      className="ButtonFavorite"
      onClick={toggleFavorite}
      onKeyDown={toggleFavorite}
    >
      {isFavorite ? (
        <img className="FullRedHeart" src={FullRedHeart} alt="FullRedHeart" />
      ) : (
        <img className="EmptyHeart" src={EmptyHeart} alt="EmptyHeart" />
      )}
    </div>
  );
};
