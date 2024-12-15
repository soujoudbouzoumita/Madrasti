import React from "react";
import ReclamationsList from "../components/ReclamationsList";
import '../styles/ReclamationsPage.css';

const reclamations = [
  {
    name: "John Doe",
    role: "Parent",
    title: "Problème avec les notes",
    details: "Je n'arrive pas à consulter les notes de mon enfant sur la plateforme.",
    date: "01/12/2024",
  },
  {
    name: "Jane Smith",
    role: "Enseignante",
    title: "Problème avec le planning",
    details: "Le planning des cours n'est pas correct pour ma classe.",
    date: "02/12/2024",
  },
  {
    name: "Ahmed Karim",
    role: "Cadre administratif",
    title: "Difficultés avec la messagerie",
    details: "Je ne reçois pas les emails envoyés par l'administration.",
    date: "03/12/2024",
  },
];

const ReclamationsPage = () => {
  return (
    <div className="reclamations-page">
      <h1>Réclamations</h1>
      <ReclamationsList reclamations={reclamations} />
    </div>
  );
};

export default ReclamationsPage;
