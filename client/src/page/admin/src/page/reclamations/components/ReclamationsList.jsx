import React from "react";
import ReclamationItem from "./ReclamationItem";
import '../styles/ReclamationsList.css';

const ReclamationsList = ({ reclamations }) => {
  return (
    <div className="reclamations-list">
      {reclamations.map((reclamation, index) => (
        <ReclamationItem key={index} {...reclamation} />
      ))}
    </div>
  );
};

export default ReclamationsList;
