import React, { useState } from "react";
import '../styles/supportDeCours.css'
const PrimarySchoolCourses = () => {
  // Données statiques des cours
  const courses = [
    {
      id: 1,
      title: "Les Animaux de la Ferme",
      subject: "Sciences",
      teacher: "Mme Dupont",
      description: "Découvre les animaux qui vivent à la ferme.",
      link: "#",
      videoLink: "https://www.youtube.com/watch?v=xxxxxxxxx" // Lien vers la vidéo YouTube
    },
    {
      id: 2,
      title: "Les Chiffres",
      subject: "Mathématiques",
      teacher: "M. Moreau",
      description: "Apprends à compter de 1 à 10 avec des jeux amusants.",
      link: "#",
      videoLink: "https://www.youtube.com/watch?v=xxxxxxxxx" // Lien vers la vidéo YouTube
    },
    {
      id: 3,
      title: "Les Couleurs",
      subject: "Art",
      teacher: "Mme Martin",
      description: "Apprends à reconnaître les couleurs avec des activités.",
      link: "#",
      videoLink: "https://www.youtube.com/watch?v=xxxxxxxxx" // Lien vers la vidéo YouTube
    },
    {
      id: 4,
      title: "Les Saisons",
      subject: "Sciences",
      teacher: "Mme Dupont",
      description: "Découvre les saisons et leurs particularités.",
      link: "#",
      videoLink: "https://www.youtube.com/watch?v=xxxxxxxxx" // Lien vers la vidéo YouTube
    }
  ];

  // Grouper les cours par matière
  const groupBySubject = (courses) => {
    const grouped = {};
    courses.forEach((course) => {
      if (!grouped[course.subject]) {
        grouped[course.subject] = [];
      }
      grouped[course.subject].push(course);
    });
    return grouped;
  };

  const groupedCourses = groupBySubject(courses);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ color: "#9b59b6", textAlign: "center" }}>Support de Cours</h1>
      {Object.keys(groupedCourses).map((subject) => (
        <div key={subject} style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#8a2be2", textTransform: "uppercase" }}>Matière : {subject}</h2>
          {groupedCourses[subject].map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: "#fff",
                border: "2px solid #9b59b6",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px 0",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease-in-out"
              }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.05)"} // Effet de survol
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            >
              <h3 style={{ color: "#e3a9ee" }}>{course.title}</h3>
              <p><strong>Enseignant(e) :</strong> {course.teacher}</p>
              <p><strong>Description :</strong> {course.description}</p>
              <a
                href={course.link}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#9b59b6",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                  transition: "background-color 0.3s"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#ab47bc"} // Changement de couleur du bouton
                onMouseOut={(e) => e.target.style.backgroundColor = "#9b59b6"}
              >
                Accéder au cours
              </a>
              <br />
              <a
                href={course.videoLink}
                style={{
                  color: "#8a2be2",
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginTop: "10px",
                  display: "inline-block"
                }}
                onMouseOver={(e) => e.target.style.color = "#ab47bc"} // Changement de couleur du lien vidéo
                onMouseOut={(e) => e.target.style.color = "#8a2be2"}
              >
                Voir la vidéo explicative
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrimarySchoolCourses;
