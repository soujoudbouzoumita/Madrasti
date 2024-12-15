import React from "react";

const Timetable = ({
  timetable,
  selectedLevel,
  selectedClass,
  isEditing,
  onEditChange,
  onAddRow,
  onSave,
}) => {
  const key = `${selectedLevel}-${selectedClass}`;
  const rows = timetable[key] || [];

  return (
    <div className="timetable">
      <table>
        <thead>
          <tr>
            <th>Jour</th>
            <th>Séance du matin</th>
            <th>Séance de l'après-midi</th>
            {isEditing && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={row.day}
                    onChange={(e) =>
                      onEditChange(index, "day", e.target.value)
                    }
                  />
                ) : (
                  row.day
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={row.morning}
                    onChange={(e) =>
                      onEditChange(index, "morning", e.target.value)
                    }
                  />
                ) : (
                  row.morning
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={row.afternoon}
                    onChange={(e) =>
                      onEditChange(index, "afternoon", e.target.value)
                    }
                  />
                ) : (
                  row.afternoon
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && <button onClick={onAddRow}>Ajouter une ligne</button>}
      <button onClick={onSave}>
        {isEditing ? "Enregistrer" : "Modifier l'emploi"}
      </button>
    </div>
  );
};

export default Timetable;
