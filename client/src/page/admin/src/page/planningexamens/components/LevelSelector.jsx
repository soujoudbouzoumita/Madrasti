// src/components/LevelSelector.jsx
import React from 'react';

const LevelSelector = ({ handleChange }) => {
  const levels = ['1ère', '2ème', '3ème', '4ème', '5ème', '6ème'];

  return (
    <div className="level-selector">
      <label htmlFor="level">Choisissez un niveau:</label>
      <select id="level" onChange={(e) => handleChange(e.target.value)}>
        <option value="">Sélectionner...</option>
        {levels.map((level, index) => (
          <option key={index} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LevelSelector;
