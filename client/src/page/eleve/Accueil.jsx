import React from "react";
import image from "./image.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";

const cours = [
  {
    date: "OCT. 29",
    titre: "Animaux ",
    professeur: "Sara Zayenne",
    horaire: "14:45 - 16:15",
    type: "Cours",
  },
  {
    date: "OCT. 30",
    titre: "Dessin",
    professeur: "Lotfi Ben Ali",
    horaire: "08:30 - 10:00",
    type: "Atelier",
  },
  {
    date: "OCT. 31",
    titre: "Mathématiques",
    professeur: "Latifa Ayechi",
    horaire: "13:00 - 14:30",
    type: "Cours",
  },
];

const supportdecours = [
  {
    titre: "Physique",
    fichier: "/pdf/physique.pdf", // chemin du fichier PDF
  },
  {
    titre: "Dessin",
    fichier: "/pdf/dessin.pdf",
  },
  {
    titre: "Mathématiques",
    fichier: "/pdf/mathematiques.pdf",
  },
];

const Acceuil = () => {
  return (
    <div className="container">
      {/* Colonne 1 */}
      <div className="column">
        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img
                src={image}
                alt="Description de l'image"
                className="image-opacity"
              />
              <div className="image-text">
                <p>Prochains cours</p>
              </div>
              <a href="target-page-url.html" className="icon-plus">
                +
              </a>
            </div>
          </div>
          <div className="bottom-part">
            {/* Planning des cours */}
            {cours.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  backgroundColor: "#f1f1f1",
                  padding: "10px",
                  borderRadius: "8px",
                  height: "60px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ff7bb5",
                    color: "#fff",
                    padding: "10px",
                    marginRight: "15px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {item.date}
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>{item.titre}</h4>
                  <p style={{ margin: "5px 0" }}>
                    <strong>{item.professeur}</strong>
                  </p>
                  <p style={{ margin: 0 }}>
                    <i>{item.horaire}</i> 📘 {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img
                src={image1}
                alt="Description de l'image"
                className="image-opacity"
              />
              <div className="image-text">
                <p>Support de cours</p>
              </div>
              <a href="target-page-url.html" className="icon-plus">
                +
              </a>
            </div>
          </div>
          <div className="bottom-part">
  {/* Support de cours */}
  {supportdecours.map((cours, index) => (
    <div
  key={index}
  style={{
    backgroundColor: "#f1f1f1", // Couleur de fond
    paddingTop: "px",
    paddingBottom:'10px',
    paddingLeft:'25px',
    marginBottom: "15px",
    height:"63px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }}
>
  <h4 style={{
    marginBottom: "10px", // Espacement entre le titre et le lien
    fontSize: "18px", 
    color: "#4a2f6b",
    textAlign: "left",
    justifycontent: "top"
  }}>
    {cours.titre}
  </h4>
  <a
    href={cours.fichier}
    className="download-link"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#5c2473", // Couleur du lien
      fontWeight: "bold",
      textDecoration: "none",
      fontSize: "14px", // Taille de texte ajustée pour le lien
      marginTop: "0", // Espacement entre le titre et le lien
      display: "inline-block", // Pour que le lien prenne son espace
    }}
  >
    📄 Télécharger le cours
  </a>

    </div>
  ))}
</div>

        </div>
      </div>

      {/* Colonne 2 */}
      <div className="column">
        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img
                src={image2}
                alt="Description de l'image"
                className="image-opacity"
              />
              <div className="image-text">
                <p>Cahier de texte</p>
              </div>
              <a href="target-page-url.html" className="icon-plus">
                +
              </a>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>

        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img
                src={image3}
                alt="Description de l'image"
                className="image-opacity"
              />
              <div className="image-text">
                <p>Relevé de note</p>
              </div>
              <a href="target-page-url.html" className="icon-plus">
                +
              </a>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>
      </div>

      {/* Barre latérale */}
      <div className="sidebar">
        <div className="small-block1">
          <div className="top-part">
            <div className="sou">
              <p>Notes importantes</p>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>
        <div className="small-block2">
          <div className="top-part"></div>
          <div className="bottom-part"></div>
        </div>
        <div className="small-block3">
          <div className="top-part"></div>
          <div className="bottom-part"></div>
        </div>
        <div className="small-block4">
          <div className="top-part"></div>
          <div className="bottom-part"></div>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
