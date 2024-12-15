import React, { useState, useMemo, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import "./ReunionE.css"; // Assurez-vous que ce fichier existe pour vos styles

const ReunionEnseignant = () => {
  // États pour gérer les réunions et les filtres
  const [reunions, setReunions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHeure, setSelectedHeure] = useState("");

  // Données statiques pour les réunions
  const reunionsData = useMemo(
    () => [
      {
        date: "2024-11-26",
        matiere: "Mathématiques",
        description: "Réunion sur le programme de révision",
        enseignant: "M. Dupont",
        salle: "Salle A1",
        heure: "10:00",
      },
      {
        date: "2024-11-27",
        matiere: "Mathématiques",
        description: "Séance de préparation pour l'examen",
        enseignant: "Mme Martin",
        salle: "Salle B2",
        heure: "14:00",
      },
      {
        date: "2024-11-30",
        matiere: "Sciences",
        description: "Réunion sur les nouvelles technologies",
        enseignant: "M. Dupont",
        salle: "Salle C3",
        heure: "09:00",
      },
    ],
    []
  );

  // Filtrer et mettre à jour les réunions en fonction des sélections de l'utilisateur
  useEffect(() => {
    const filteredReunions = reunionsData.filter((reunion) => {
      const matchDate = selectedDate
        ? dayjs(reunion.date).isSame(selectedDate, "day")
        : true;
      const matchHeure = selectedHeure ? reunion.heure === selectedHeure : true;
      return matchDate && matchHeure;
    });
    setReunions(filteredReunions);
  }, [selectedDate, selectedHeure, reunionsData]);

  return (
    <div className="reunion-container">
      <h1>Réunions à Venir</h1>

      {/* Filtres */}
      <div className="filters">
        {/* Filtre par date */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label htmlFor="date-picker">Filtrer par Date :</label>
          <DatePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            renderInput={(params) => <TextField {...params} id="date-picker" placeholder="Choisir une date" />}
            clearable
          />
        </LocalizationProvider>

        {/* Filtre par heure */}
        <label htmlFor="time-filter">Filtrer par Heure :</label>
        <input
          type="time"
          id="time-filter"
          value={selectedHeure}
          onChange={(e) => setSelectedHeure(e.target.value)}
        />
      </div>

      {/* Liste des réunions */}
      <h2>Liste des Réunions à Venir</h2>
      <table className="reunion-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Salle</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          {reunions.length > 0 ? (
            reunions.map((reunion, index) => (
              <tr key={index}>
                <td>{reunion.date}</td>
                <td>{reunion.description}</td>
                <td>{reunion.salle}</td>
                <td>{reunion.heure}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucune réunion à venir pour l'instant</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReunionEnseignant;
