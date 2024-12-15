import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importer le style du calendrier
import '../styles/calendrierExamens.css'; // Si vous avez un fichier CSS personnalisé

const ExamCalendar = () => {
  // État du calendrier sélectionné
  const [date, setDate] = useState(new Date());

  // Liste d'examens
  const exams = [
    {
      id: 1,
      date: new Date(2024, 11, 16, 9, 0), // 15 décembre 2024, 09:00
      subject: 'Mathématiques',
      teacher: 'M. Ben Ali',
      room: 'Salle A1',
    },
    {
      id: 2,
      date: new Date(2024, 11, 17, 14, 0), // 16 décembre 2024, 14:00
      subject: 'Sciences',
      teacher: 'Mme. Khadija',
      room: 'Salle B2',
    },
    {
      id: 3,
      date: new Date(2024, 11, 18, 11, 0), // 18 décembre 2024, 11:00
      subject: 'Histoire',
      teacher: 'M. Mohamed',
      room: 'Salle C3',
    },
    {
      id: 4,
      date: new Date(2024, 11, 19, 10, 30), // 20 décembre 2024, 10:30
      subject: 'Français',
      teacher: 'Mme. Amina',
      room: 'Salle D4',
    },
  ];

  // Filtrer les examens pour la date sélectionnée
  const selectedExams = exams.filter(
    (exam) =>
      exam.date.getDate() === date.getDate() &&
      exam.date.getMonth() === date.getMonth() &&
      exam.date.getFullYear() === date.getFullYear()
  );

  // Fonction pour colorier les jours avec des examens
  const getExamDays = () => {
    return exams.map((exam) => {
      return exam.date.getDate(); // Nous récupérons uniquement le jour du mois
    });
  };

  // Couleur des jours d'examen
  const examDays = getExamDays();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Calendrier des Examens</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '20px' }}>
        {/* Calendrier */}
        <div style={{ flex: 1 }}>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={({ date, view }) => {
              // Si la date est un jour d'examen, on applique une classe CSS spéciale
              if (examDays.includes(date.getDate())) {
                return 'exam-day'; // Classe CSS pour les jours d'examen
              }
              return '';
            }}
          />
        </div>

        {/* Détails des examens */}
        <div style={{ flex: 1, marginLeft: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h2>Examens du {date.toLocaleDateString()}</h2>

          {selectedExams.length === 0 ? (
            <p>Aucun examen pour cette date.</p>
          ) : (
            selectedExams.map((exam) => (
              <div
                key={exam.id}
                style={{
                  padding: '10px',
                  backgroundColor: '#e3a9ee',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <p><strong>Matière :</strong> {exam.subject}</p>
                <p><strong>Enseignant(e) :</strong> {exam.teacher}</p>
                <p><strong>Heure :</strong> {exam.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p><strong>Salle :</strong> {exam.room}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamCalendar;
