import React, { useState, useEffect } from "react";
import { CocherIcon, PlusIcon } from "@assets";
import "./ButtonAddToFavorite.scss";

export const ButtonAddToFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addFavoriteIcon = <PlusIcon />;
  const addedFavoriteIcon = <CocherIcon />;
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
      {isFavorite ? addFavoriteIcon : addedFavoriteIcon}
    </div>
  );
};
