import React from "react";

const LevelSelector = ({ selectedLevel, onLevelChange }) => {
  const handleChange = (event) => {
    onLevelChange(event.target.value);
  };

  return (
    <div className="level-selector">
      <label htmlFor="level">Niveau :</label>
      <select id="level" value={selectedLevel} onChange={handleChange}>
        <option value="">-- Sélectionner un niveau --</option>
        <option value="1ère">1ère</option>
        <option value="2ème">2ème</option>
        <option value="3ème">3ème</option>
        <option value="4ème">4ème</option>
        <option value="5ème">5ème</option>
        <option value="6ème">6ème</option>
      </select>
    </div>
  );
};

export default LevelSelector;
