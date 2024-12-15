import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";  // N'oublie pas d'importer le CSS
import "./Exam.css"; // Si tu utilises des styles spécifiques

// Exemple de dates d'examens
const examDates = [
  new Date(2024, 11, 5),   // 5 Décembre 2024
  new Date(2024, 11, 10),  // 10 Décembre 2024
  new Date(2024, 11, 12),  // 12 Décembre 2024
  new Date(2024, 11, 15),  // 15 Décembre 2024
];

function ExamCalendar() {
  const [date, setDate] = useState(new Date());

  // Fonction pour vérifier si la date est un jour d'examen
  const isExamDay = (date) => {
    return examDates.some(examDate => 
      examDate.getDate() === date.getDate() &&
      examDate.getMonth() === date.getMonth() &&
      examDate.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="calendar-container">
      <h2>Calendrier des Examens</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => 
          view === "month" && isExamDay(date) ? "exam-day" : null
        }
      />
      <div className="exam-details">
        <h3>Examen pour le {date.toLocaleDateString()}</h3>
        {isExamDay(date) ? (
          <p>C'est un jour d'examen !</p>
        ) : (
          <p>Aucun examen prévu pour cette date.</p>
        )}
      </div>
    </div>
  );
}

export default ExamCalendar;
