import React from "react";
import { CocherIcon } from "@assets";
import "./ButtonRemoveFromFavorite.scss";

export const ButtonRemoveFromFavorite = () => {
  return (
    <div
      aria-hidden="true"
      className="ButtonFavorite"
      // onClick={(e) => toggleFavorite(e)}
      // onKeyDown={(e) => toggleFavorite(e)}
    >
      <CocherIcon />
    </div>
  );
};
