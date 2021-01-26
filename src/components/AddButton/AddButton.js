import React from "react";

import "./add-button.scss";
import { ReactComponent as IcoPlus } from "../../assets/icons/ico-plus.svg";

const AddButton = (props) => {
  return (
    <button className={`btn--secondary btn--add ${props.className}`}>
      <IcoPlus /> {props.text}
    </button>
  );
};

export default AddButton;
