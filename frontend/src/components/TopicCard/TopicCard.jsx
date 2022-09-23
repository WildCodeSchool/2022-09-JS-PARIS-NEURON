import React from "react";

import "./TopicCard.scss";

export const TopicCard = ({ id }) => {
  return (
    <div className="topicCard">
      <span className="topicCard_title">{`title${id}`}</span>
      <div className="topicCard_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas
        molestiae consequuntur neque nostrum sed modi, libero voluptatum rerum
        eveniet repudiandae numquam placeat, voluptatem maxime aperiam beatae
        corporis asperiores itaque.
      </div>
    </div>
  );
};
