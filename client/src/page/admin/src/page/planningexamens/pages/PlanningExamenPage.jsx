// src/pages/PlanningExamenPage.jsx
import React, { useState } from 'react';
import LevelSelector from '../components/LevelSelector.jsx';
import ExamScheduleTable from '../components/ExamScheduleTable.jsx';
import EditableExamScheduleTable from '../components/EditableExamScheduleTable';
import '../styles/PlanningExam.css';


const PlanningExamenPage = () => {
  const [level, setLevel] = useState('');
  const [schedules, setSchedules] = useState({
    '1ère': [
      { matin: 'Mathématiques', aprem: 'Français' },
      { matin: 'Physique', aprem: 'Histoire' },
    ],
    '2ème': [
      { matin: 'Anglais', aprem: 'SVT' },
      { matin: 'Géographie', aprem: 'Mathématiques' },
    ],
    // Ajoutez plus de niveaux si nécessaire
  });

  const handleLevelChange = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  const updateSchedule = (newSchedule) => {
    setSchedules({ ...schedules, [level]: newSchedule });
  };

  return (
    <div className="planning-examens">
      <LevelSelector handleChange={handleLevelChange} />
      {level && (
        <>
          <EditableExamScheduleTable
            schedule={schedules[level] || []}
            updateSchedule={updateSchedule}
          />
        </>
      )}
    </div>
  );
};

export default PlanningExamenPage;
