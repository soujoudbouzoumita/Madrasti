import React, { useState } from "react";
import "./AjouterCours.css";

const SupportsDeCours = () => {
  const [niveau, setNiveau] = useState("");
  const [matiere, setMatiere] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [pdf, setPdf] = useState(null);
  const [historique, setHistorique] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction pour gérer le changement de fichier
  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs obligatoires
    if (!niveau || !matiere) {
      setErrorMessage("Le niveau de classe et la matière doivent être sélectionnés.");
      return;
    }

    if (!pdf && commentaire.trim() === "") {
      setErrorMessage("Vous devez joindre un fichier PDF ou ajouter un commentaire.");
      return;
    }

    // Ajout du nouveau cours à l'historique
    const newCours = {
      niveau,
      matiere,
      commentaire,
      pdf,
      date: new Date().toLocaleString(),
    };

    setHistorique([...historique, newCours]);

    // Réinitialisation des champs après soumission
    setNiveau("");
    setMatiere("");
    setCommentaire("");
    setPdf(null);
    setErrorMessage("");
  };

  return (
    <div className="ajouter-cours-container">
      <h1>Ajouter un Support de Cours</h1>

      {/* Affichage du message d'erreur si présent */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="ajouter-cours-form">
        {/* Sélection du niveau */}
        <label htmlFor="niveau">Niveau de Classe:</label>
        <select
          id="niveau"
          value={niveau}
          onChange={(e) => setNiveau(e.target.value)}
          required
        >
          <option value="">Sélectionner le niveau</option>
          <option value="1">1ère année</option>
          <option value="2">2ème année</option>
          <option value="3">3ème année</option>
          <option value="4">4ème année</option>
          <option value="5">5ème année</option>
          <option value="6">6ème année</option>
        </select>

        {/* Sélection de la matière */}
        <label htmlFor="matiere">Matière:</label>
        <select
          id="matiere"
          value={matiere}
          onChange={(e) => setMatiere(e.target.value)}
          required
        >
          <option value="">Sélectionner la matière</option>
          <option value="maths">Mathématiques</option>
          <option value="sciences">Sciences</option>
          <option value="arabe">Arabe</option>
          <option value="anglais">Anglais</option>
          <option value="francais">Français</option>
          <option value="histoire">Histoire</option>
          <option value="geographie">Géographie</option>
          <option value="musique">Musique</option>
        </select>

        {/* Champ commentaire */}
        <label htmlFor="commentaire">Commentaire:</label>
        <textarea
          id="commentaire"
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
          rows="4"
          placeholder="Ajoutez un commentaire..."
        ></textarea>

        {/* Téléchargement du fichier PDF */}
        <label htmlFor="cours-pdf">Télécharger le PDF du cours:</label>
        <input
          type="file"
          id="cours-pdf"
          accept="application/pdf"
          onChange={handleFileChange}
        />

        {/* Bouton de soumission */}
        <button type="submit">Ajouter le cours</button>
      </form>

      {/* Affichage de l'historique des cours ajoutés */}
      <h2>Historique des Cours Ajoutés</h2>
      <table className="historique-table">
        <thead>
          <tr>
            <th>Niveau</th>
            <th>Matière</th>
            <th>Commentaire</th>
            <th>PDF</th>
            <th>Date d'ajout</th>
          </tr>
        </thead>
        <tbody>
          {historique.length > 0 ? (
            historique.map((cours, index) => (
              <tr key={index}>
                <td>{cours.niveau}</td>
                <td>{cours.matiere}</td>
                <td>{cours.commentaire}</td>
                <td>
                  {cours.pdf && (
                    <a
                      href={URL.createObjectURL(cours.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Télécharger
                    </a>
                  )}
                </td>
                <td>{cours.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Aucun cours ajouté pour le moment.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupportsDeCours;
