import React from "react";
import "../styles/prochainCours.css"; // Import du fichier CSS

// Données statiques des cours
const coursData = [
  {
    id: 1,
    titre: "mathématiques ",
    heure: "08:30 - 10:00",
    professeur: "Asma Salah",
    salle: "Salle B219",
    date: "2024-12-09",
  },
  {
    id: 2,
    titre: "Sciences de la Vie et de la Terre",
    heure: "11:30 - 13:00",
    professeur: "Nadia Ben Mouhamed ",
    salle: "Salle A303",
    date: "2024-12-09",
  },
  {
    id: 3,
    titre: "Arabe",
    heure: "14:30 - 16:00",
    professeur: "Mohamed Omran",
    salle: "Salle B219",
    date: "2024-12-09",
  },
  {
    id: 4,
    titre: "Français ",
    heure: "08:30 - 10:00",
    professeur: "Salwa KHEDHER",
    salle: "Salle A301",
    date: "2024-12-10",
  },
  {
    id: 5,
    titre: "Français ",
    heure: "11:00 - 12:30",
    professeur: "Salwa KHEDHER",
    salle: "Salle C101",
    date: "2024-12-10",
  },
  {
    id: 6,
    titre: "Dessin",
    heure: "14:00 - 15:30",
    professeur: "Samir CHAABANE",
    salle: "Salle D102",
    date: "2024-12-10",
  },
  {
    id: 7,
    titre: "Mathématiques ",
    heure: "09:00 - 10:30",
    professeur: "Asma Salah",
    salle: "Salle B202",
    date: "2024-12-11",
  },
  {
    id: 8,
    titre: "Mathématiques ",
    heure: "11:00 - 12:30",
    professeur: "Asma Salah",
    salle: "Salle B202",
    date: "2024-12-11",
  },
  {
    id: 9,
    titre: "Anglais",
    heure: "14:00 - 15:30",
    professeur: "Fares HAKIMI",
    salle: "Salle A201",
    date: "2024-12-11",
  },
  {
    id: 10,
    titre: "Physique",
    heure: "08:30 - 10:00",
    professeur: "Mouna SLIMANE",
    salle: "Salle C302",
    date: "2024-12-12",
  },
  {
    id: 11,
    titre: "Physique",
    heure: "11:00 - 12:30",
    professeur: "Mouna SLIMANE",
    salle: "Salle C302",
    date: "2024-12-12",
  },
  {
    id: 12,
    titre: "Sciences de la Vie et de la Terre",
    heure: "14:30 - 16:00",
    professeur: "Nadia Ben Mouhamed",
    salle: "Salle A203",
    date: "2024-12-12",
  },
  {
    id: 13,
    titre: "Sport",
    heure: "09:00 - 10:30",
    professeur: "Omar ZIDI",
    salle: "Salle D201",
    date: "2024-12-13",
  },
  {
    id: 14,
    titre: "Géographie",
    heure: "11:00 - 12:30",
    professeur: "Hedi TRABELSI",
    salle: "Salle C101",
    date: "2024-12-13",
  },
  {
    id: 15,
    titre: "Histoire",
    heure: "14:00 - 15:30",
    professeur: "Sami GHARBI",
    salle: "Salle A101",
    date: "2024-12-13",
  },
];


const WeeklySchedule = () => {
  // Générer les jours de la semaine (lundi à vendredi)
  const weekDays = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
  const today = new Date();
  const startOfWeek = today.getDate() - today.getDay() + 1; // Lundi

  const datesOfWeek = weekDays.map((day, index) => {
    const date = new Date(today.setDate(startOfWeek + index));
    return {
      day,
      date: date.toISOString().split("T")[0],
    };
  });

  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Jour</th>
          <th>Matin</th>
          <th>Après-midi</th>
        </tr>
      </thead>
      <tbody>
        {datesOfWeek.map(({ day, date }) => {
          const coursMatin = coursData.filter(
            (cours) =>
              cours.date === date &&
              parseInt(cours.heure.split(":")[0]) < 12
          );
          const coursApresMidi = coursData.filter(
            (cours) =>
              cours.date === date &&
              parseInt(cours.heure.split(":")[0]) >= 12
          );

          return (
            <tr key={date}>
              <td>{day.toUpperCase()}</td>
              <td>
                {coursMatin.length > 0 ? (
                  coursMatin.map((cours) => (
                    <div key={cours.id} className="course-card">
                      <h4>{cours.titre}</h4>
                      <p>
                        <strong>Heure :</strong> {cours.heure}
                      </p>
                      <p>
                        <strong>Professeur :</strong> {cours.professeur}
                      </p>
                      <p>
                        <strong>Salle :</strong> {cours.salle}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>Aucun cours</p>
                )}
              </td>
              <td>
                {coursApresMidi.length > 0 ? (
                  coursApresMidi.map((cours) => (
                    <div key={cours.id} className="course-card">
                      <h4>{cours.titre}</h4>
                      <p>
                        <strong>Heure :</strong> {cours.heure}
                      </p>
                      <p>
                        <strong>Professeur :</strong> {cours.professeur}
                      </p>
                      <p>
                        <strong>Salle :</strong> {cours.salle}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>Aucun cours</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WeeklySchedule;
