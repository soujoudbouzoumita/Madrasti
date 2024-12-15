import React, { useState } from "react";
import LevelSelector from "../components/LevelSelector";
import ClassSelector from "../components/ClassSelector";
import Timetable from "../components/Timetable";
import "../styles/TimeTablePage.css";

const TimeTablePage = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [timetable, setTimetable] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const initialData = {
    "1ère-A": [
      { day: "Lundi", morning: "Mathématiques", afternoon: "Français" },
      { day: "Mardi", morning: "Anglais", afternoon: "Histoire" },
    ],
    "2ème-B": [
      { day: "Mercredi", morning: "SVT", afternoon: "Physique" },
      { day: "Jeudi", morning: "Espagnol", afternoon: "Informatique" },
    ],
  };

  React.useEffect(() => {
    setTimetable(initialData);
  }, []);

  const handleEditChange = (index, field, value) => {
    const key = `${selectedLevel}-${selectedClass}`;
    const updatedTimetable = [...(timetable[key] || [])];
    updatedTimetable[index][field] = value;
    setTimetable({ ...timetable, [key]: updatedTimetable });
  };

  const handleAddRow = () => {
    const key = `${selectedLevel}-${selectedClass}`;
    const updatedTimetable = [
      ...(timetable[key] || []),
      { day: "", morning: "", afternoon: "" },
    ];
    setTimetable({ ...timetable, [key]: updatedTimetable });
  };

  const handleSave = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="timetable-page">
      <h1>Emplois du Temps</h1>
      <div className="selectors">
        <LevelSelector
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />
        {selectedLevel && (
          <ClassSelector
            selectedClass={selectedClass}
            onClassChange={setSelectedClass}
          />
        )}
      </div>
      {selectedLevel && selectedClass && (
        <Timetable
          timetable={timetable}
          selectedLevel={selectedLevel}
          selectedClass={selectedClass}
          isEditing={isEditing}
          onEditChange={handleEditChange}
          onAddRow={handleAddRow}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default TimeTablePage;
