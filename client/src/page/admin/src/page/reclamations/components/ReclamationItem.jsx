import React from "react";
import '../styles/ReclamationItem.css';

const ReclamationItem = ({ name, role, title, details, date }) => {
  return (
    <div className="reclamation-item">
      <div className="reclamation-header">
        <h3>{title}</h3>
        <span className="reclamation-date">{date}</span>
      </div>
      <p className="reclamation-details">{details}</p>
      <div className="reclamation-footer">
        <span>{name}</span> - <span className="reclamation-role">{role}</span>
      </div>
    </div>
  );
};

export default ReclamationItem;
