import React from "react";
import { useNavigate } from "react-router";
import "./NotFound.scss";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="notFound">
      <span className="notFound_text">404 not found</span>
      <button
        className="notFound_return"
        type="button"
        onClick={() => handleClick()}
      >
        retour
      </button>
    </div>
  );
};
