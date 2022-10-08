import React from "react";
import { Avatar } from "@components/";
import "./NeuronCard.scss";

export const NeuronCard = () => {
  // const [infoUsers, setInfoUsers] = useState([]);

  // useEffect(() => {
  //   // getUsersById(setInfoUsers);
  // }, []);

  return (
    <div className="NeuronCard">
      <div className="NeuronCard_content">
        <div className="NeuronCard__avatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
};
