import React, { useState } from "react";
import "./Cahier.css";

const CahierDeTexte = () => {
  const [niveau, setNiveau] = useState("");
  const [matiere, setMatiere] = useState("");
  const [classe, setClasse] = useState(""); // Nouvel état pour la classe
  const [commentaire, setCommentaire] = useState("");
  const [pdf, setPdf] = useState(null);
  const [historique, setHistorique] = useState([]);
  const [filtreNiveau, setFiltreNiveau] = useState("");
  const [filtreClasse, setFiltreClasse] = useState(""); // Filtre par classe
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!niveau || !matiere || !classe) {
      setErrorMessage("Le niveau de classe, la matière et la classe doivent être sélectionnés.");
      return;
    }

    if (!pdf && commentaire.trim() === "") {
      setErrorMessage("Vous devez joindre un fichier PDF ou ajouter un commentaire.");
      return;
    }

    const newTravail = {
      niveau,
      matiere,
      classe, // Ajout de la classe
      commentaire,
      pdf,
      date: new Date().toLocaleString(),
    };

    setHistorique([...historique, newTravail]);

    // Réinitialisation des champs après soumission
    setNiveau("");
    setMatiere("");
    setClasse("");
    setCommentaire("");
    setPdf(null);
    setErrorMessage("");
  };

  const travauxFiltres = historique.filter(
    (travail) =>
      (!filtreNiveau || travail.niveau === filtreNiveau) &&
      (!filtreClasse || travail.classe === filtreClasse)
  );

  return (
    <div className="cahier-de-texte-container">
      <h1>Ajouter un Travail dans le Cahier de Texte</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="cahier-de-texte-form">
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

        <label htmlFor="classe">Classe:</label>
        <select
          id="classe"
          value={classe}
          onChange={(e) => setClasse(e.target.value)}
          required
        >
          <option value="">Sélectionner la classe</option>
          <option value="Classe A">Classe A</option>
          <option value="Classe B">Classe B</option>
          <option value="Classe C">Classe C</option>
        </select>

        <label htmlFor="commentaire">Commentaire:</label>
        <textarea
          id="commentaire"
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
          rows="4"
          placeholder="Ajoutez un commentaire..."
        ></textarea>

        <label htmlFor="travail-pdf">Télécharger le PDF:</label>
        <input
          type="file"
          id="travail-pdf"
          accept="application/pdf"
          onChange={handleFileChange}
        />

        <button type="submit">Ajouter le Travail</button>
      </form>

      <h2>Voir les Travaux Déposés</h2>
      <label htmlFor="filtre-niveau">Filtrer par Niveau:</label>
      <select
        id="filtre-niveau"
        value={filtreNiveau}
        onChange={(e) => setFiltreNiveau(e.target.value)}
      >
        <option value="">Tous les niveaux</option>
        <option value="1">1ère année</option>
        <option value="2">2ème année</option>
        <option value="3">3ème année</option>
        <option value="4">4ème année</option>
        <option value="5">5ème année</option>
        <option value="6">6ème année</option>
      </select>

      <label htmlFor="filtre-classe">Filtrer par Classe:</label>
      <select
        id="filtre-classe"
        value={filtreClasse}
        onChange={(e) => setFiltreClasse(e.target.value)}
      >
        <option value="">Toutes les classes</option>
        <option value="Classe A">Classe A</option>
        <option value="Classe B">Classe B</option>
        <option value="Classe C">Classe C</option>
      </select>

      <table className="historique-table">
        <thead>
          <tr>
            <th>Niveau</th>
            <th>Classe</th>
            <th>Matière</th>
            <th>Commentaire</th>
            <th>PDF</th>
            <th>Date d'Ajout</th>
          </tr>
        </thead>
        <tbody>
          {travauxFiltres.map((travail, index) => (
            <tr key={index}>
              <td>{travail.niveau}</td>
              <td>{travail.classe}</td>
              <td>{travail.matiere}</td>
              <td>{travail.commentaire}</td>
              <td>
                {travail.pdf && (
                  <a
                    href={URL.createObjectURL(travail.pdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Télécharger
                  </a>
                )}
              </td>
              <td>{travail.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CahierDeTexte;