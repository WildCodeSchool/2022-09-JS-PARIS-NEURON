import React, { useState, useEffect } from "react";
import { CocherIcon, PlusIcon } from "@assets";
import "./ButtonFavorite.scss";

export const ButtonFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addFavoriteIcon = <PlusIcon />;
  const removeFavoriteIcon = <CocherIcon />;
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
      {isFavorite ? addFavoriteIcon : removeFavoriteIcon}
    </div>
  );
};
