import React, { useState, useEffect } from "react";
import "./ButtonFavorite.scss";

export const ButtonFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {}, [isFavorite]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      aria-hidden="true"
      className="ButtonFavorite"
      onClick={(e) => toggleFavorite(e)}
      onKeyDown={(e) => toggleFavorite(e)}
    >
      {isFavorite ? (
        <img
          className="FullRedHeart"
          src="./assets/images/fullRedHeart"
          alt="FullRedHeart"
        />
      ) : (
        <img
          className="EmptyHeart"
          src="./assets/images/emptyHeart"
          alt="EmptyHeart"
        />
      )}
    </div>
  );
};
