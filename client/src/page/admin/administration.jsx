import React from "react";
import { Link } from "react-router-dom";  
import image from './styles/image.png';
import image2 from './styles/image1.png';
import image1 from './styles/image2.png';
import image3 from './styles/image3.webp';

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
                                <h1>Emploi du temps</h1>
                            </div>
                            <a href="target-page-url.html" className="icon-plus">
                                +
                            </a>
                        </div>
                    </div>
                    <div className="bottom-part">
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
                                <h1>Réunions</h1>
                            </div>
                            <a href="target-page-url.html" className="icon-plus">
                                +
                            </a>
                        </div>
                    </div>
                    <div className="bottom-part">
                    </div>
                </div>
            </div>

             {/* Colonne 2 */}
                  <div className="column">
                    <div className="large-block">
                      <div className="top-part">
                        <div className="image-container">
                          <img src={image2} alt="Description de l'image" className="image-opacity" />
                          <div className="image-text">
                            <h1>Planning d'exam</h1>
                          </div>
                          <Link to="examens" className="icon-plus">+</Link>
                        </div>
                      </div>
                      <div className="bottom-part">
                        <div className="block-details">
                          
                          <div className="next-exam">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="large-block">
                      <div className="top-part">
                        <div className="image-container">
                          <img src={image3} alt="Description de l'image" className="image-opacity" />
                          <div className="image-text">
                            <h1>Réclamations</h1>
                          </div>
                          <Link to="reclamations" className="icon-plus">+</Link>
                        </div>
                      </div>
                      <div className="bottom-part">
                        <div className="block-details">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Barre latérale */}
                  <div className="sidebar">
                    <div className="small-block1">
                      <div className="top-part notes-importantes">
                        <Link to="notes" className="sidebar-link">
                          <i className="fas fa-exclamation-circle"></i>
                        </Link>
                        <div className="sou"><h1>Notes importantes</h1></div>  
                      </div>
                      <div className="bottom-part">
                       <p style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  
                  padding: "10px",
                  borderRadius: "8px",
                  height: "60px",
                }}> <strong ><strong style={{ color : "blue" }}>Absences :</strong>  Si votre enfant est absent, veuillez prévenir 
                          l'administration avant 9h00 le jour-même. </strong></p>
                      </div>
                    </div>
                    <div className="small-block2">
                      <div className="top-part calendrier-examen">
                      <Link to="examens" className="sidebar-link">
                          <i className="fa-solid fa-chess"></i>
                        </Link>
                        <div className="sou"><h1> Exam </h1></div>
                      </div>
                      <div className="bottom-part">
                      <p style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  
                  padding: "10px",
                  borderRadius: "8px",
                  height: "60px",
                }}> <strong  style={{ color : "green" }}>Examen :  la session d examen du 1 er semestre commence le 6 janvier </strong></p>
                      </div>
                    </div>
                    <div className="small-block3">
                      <div className="top-part evenements">
                        <Link to="examens" className="sidebar-link">
                          <i className="fa-solid fa-chess"></i>
                        </Link>
                        <div className="sou"><h1> Evenements </h1></div>
                      </div>
                      <div className="bottom-part">
                      <p style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                
                  padding: "10px",
                  borderRadius: "8px",
                  height: "60px",
                }}> <strong>Journée de sensibilisation </strong></p>
                      </div>
                    </div>
                    <div className="small-block4">
                    <div className="top-part">
              <h1>Calendar </h1>
              </div>
              <div className="bottom-part">
              </div>
              <li>
                <ul style={{ color : "#e02787" }}>06/01/2025:examens du 1 er semestre</ul>
                <ul style={{ color : "blue" }}>06/02/2025:vacances du 2 nd semestre</ul>
                <ul style={{ color : "green" }}>01/03/2025: 1 er jour du Ramandan</ul>
                <ul style={{ color : "black" }}>09/01/2025:journée de martyrs</ul>
                <ul style={{ color : "orange" }}>12/04/2025:Aid el fitr</ul>
                <ul style={{ color : "red" }}>06/06/2025:fin d années</ul>
              </li>
            </div>
                  </div>
                </div>
              );
            };
            
            
            export default Acceuil;