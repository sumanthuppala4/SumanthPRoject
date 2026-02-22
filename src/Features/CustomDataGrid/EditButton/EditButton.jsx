import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./EditButton.css";

const EditButton = ({ onClickFunction }) => {
  return (
    <button className="btn btn-primary edit-button" onClick={onClickFunction}>
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
};

export default EditButton;
