import React, { useState } from "react";
import '../styles/cahierDeTexte.css';

function WorkSubmission() {
  const [file, setFile] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Veuillez télécharger un fichier.");
      return;
    }
    alert("Travail soumis avec succès !");
    // Vous pouvez envoyer le fichier au backend ici ou effectuer d'autres actions.
    setSelectedWork(null); // Fermer le formulaire après soumission
  };

  const works = [
    {
      title: "Analyse des phénomènes géologiques",
      subject: "Sciences de la Vie et de la Terre (SVT)",
      teacher: "M. Jean Dupont",
      deadline: "20 Décembre 2024",
      description: "Vous devez réaliser une étude complète sur les volcans et leur impact sur l'environnement. Utilisez des sources fiables et faites des graphiques pour illustrer vos propos.",
    },
    {
      title: "Exercice de Physique sur les lois de Newton",
      subject: "Physique",
      teacher: "Mme Claire Martin",
      deadline: "15 Décembre 2024",
      description: "Résoudre les exercices portant sur les trois lois de Newton et appliquer ces lois à des cas réels.",
    },
    {
      title: "Rédaction d'un essai sur la Révolution Française",
      subject: "Histoire",
      teacher: "M. Paul Lefevre",
      deadline: "25 Décembre 2024",
      description: "Rédiger un essai argumenté sur les causes et les conséquences de la Révolution Française.",
    },
  ];

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const handleCloseForm = () => {
    setSelectedWork(null);
    setFile(null); // Réinitialiser le fichier sélectionné
  };

  return (
    <div className="container">
      <header>
        <h1>Travaux à Faire</h1>
      </header>

      <section className="works-list">
        {works.map((work, index) => (
          <div
            key={index}
            className="work-item"
            onClick={() => handleWorkClick(work)}
          >
            <h2>{work.title}</h2>
            <p><strong>Matière :</strong> {work.subject}</p>
            <p><strong>Enseignant :</strong> {work.teacher}</p>
            <p><strong>Date limite :</strong> {work.deadline}</p>
          </div>
        ))}
      </section>

      {selectedWork && (
        <section className="work-detail-modal">
          <div className="work-detail-container">
            <h2>Soumettre le travail : {selectedWork.title}</h2>
            <p><strong>Deadline :</strong> {selectedWork.deadline}</p>
            <p><strong>Description :</strong> {selectedWork.description}</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="student-work">Téléchargez votre travail en format PDF :</label>
              <input
                type="file"
                id="student-work"
                name="student-work"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
              <button type="submit" className="submit-btn">Soumettre le travail</button>
            </form>

            <button className="close-btn" onClick={handleCloseForm}>
              Fermer
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default WorkSubmission;
