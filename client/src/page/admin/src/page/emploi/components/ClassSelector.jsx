import React from "react";

const ClassSelector = ({ selectedClass, onClassChange }) => {
  const handleChange = (event) => {
    onClassChange(event.target.value);
  };

  return (
    <div className="class-selector">
      <label htmlFor="class">Classe :</label>
      <select id="class" value={selectedClass} onChange={handleChange}>
        <option value="">-- Sélectionner une classe --</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
};

export default ClassSelector;
