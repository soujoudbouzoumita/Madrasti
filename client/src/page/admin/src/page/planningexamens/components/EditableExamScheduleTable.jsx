// src/components/EditableExamScheduleTable.jsx
import React, { useState } from 'react';

const EditableExamScheduleTable = ({ schedule, updateSchedule }) => {
  const [newRow, setNewRow] = useState({ matin: '', aprem: '' });

  const handleInputChange = (e, index, field) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = e.target.value;
    updateSchedule(updatedSchedule);
  };

  const handleNewRowChange = (e, field) => {
    setNewRow({ ...newRow, [field]: e.target.value });
  };

  const addNewRow = () => {
    if (newRow.matin && newRow.aprem) {
      updateSchedule([...schedule, newRow]);
      setNewRow({ matin: '', aprem: '' });
    }
  };

  const deleteRow = (index) => {
    const updatedSchedule = [...schedule];
    updatedSchedule.splice(index, 1);
    updateSchedule(updatedSchedule);
  };

  return (
    <div className="editable-schedule">
      <h3>Modifier le planning des examens</h3>
      <table>
        <thead>
          <tr>
            <th>Matin</th>
            <th>Après-midi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.matin}
                  onChange={(e) => handleInputChange(e, index, 'matin')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.aprem}
                  onChange={(e) => handleInputChange(e, index, 'aprem')}
                />
              </td>
              <td>
                <button onClick={() => deleteRow(index)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="new-row">
        <input
          type="text"
          placeholder="Séance matin"
          value={newRow.matin}
          onChange={(e) => handleNewRowChange(e, 'matin')}
        />
        <input
          type="text"
          placeholder="Séance après-midi"
          value={newRow.aprem}
          onChange={(e) => handleNewRowChange(e, 'aprem')}
        />
        <button onClick={addNewRow}>Ajouter</button>
      </div>
    </div>
  );
};

export default EditableExamScheduleTable;
