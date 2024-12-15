import React from "react";
import { Link } from "react-router-dom";  
import image from './styles/image.png';
import image2 from './styles/image1.png';
import image1 from './styles/image2.png';
import image3 from './styles/image3.webp';


const Acceuil = () => {
  console.log(new Date().getDay());

  return (
    <div className="container">
      {/* Colonne 1 */}
      <div className="column">
        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img src={image} alt="Description de l'image" className="image-opacity" />
              <div className="image-text">
                <p>Emplois du temps</p>
              </div>
              {/* Utilisez Link pour la navigation */}
              <Link to="admin/emplois" className="icon-plus">+</Link>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>
        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img src={image1} alt="Description de l'image" className="image-opacity" />
              <div className="image-text">
                <p>Planning des réunions</p>
              </div>
              {/* Utilisez Link pour la navigation */}
              <Link to="admin/reunions" className="icon-plus">+</Link>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>
      </div>

      {/* Colonne 2 */}
      <div className="column">
        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img src={image2} alt="Description de l'image" className="image-opacity" />
              <div className="image-text">
                <p>Planning des examens</p>
              </div>
              {/* Utilisez Link pour la navigation */}
              <Link to="admin/examens" className="icon-plus">+</Link>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>
        <div className="large-block">
          <div className="top-part">
            <div className="image-container">
              <img src={image3} alt="Description de l'image" className="image-opacity" />
              <div className="image-text">
                <p>Réclamations</p>
              </div>
              {/* Utilisez Link pour la navigation */}
              <Link to="admin/reclamations" className="icon-plus">+</Link>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>
      </div>
      
    {/* Barre latérale */}
    <div className="sidebar">
  <div className="small-block1">
    <div className="top-part notes-importantes">
     <Link to="admin/notes" className="sidebar-link">
      <i className="fas fa-exclamation-circle"></i>
     </Link>
      <div className="sou"><p>Notes importantes</p></div>  
      </div>
    <div className="bottom-part"></div>
  </div>
  <div className="small-block2">
    <div className="top-part calendrier-examen">
     <Link to="admin/examens" className="sidebar-link">
      <i className="fa-regular fa-calendar"></i>
     </Link>
      <div className="sou"><p>Calendrier d'examen</p></div>
    </div>
    <div className="bottom-part"></div>
  </div>
  <div className="small-block3">
    <div className="top-part evenements">
     <Link to="admin/examens" className="sidebar-link">
      <i className="fa-solid fa-chess"></i>
      </Link>
      <div className="sou"><p>Évènements</p></div>
    </div>
    <div className="bottom-part"></div>
  </div>
  <div className="small-block4">
    <div className="top-part calendrier-annuel">
     <Link to="admin/calendrier" className="sidebar-link">
      <i className="fas fa-calendar"></i>
     </Link>
      <div className="sou"><p>Calendrier annuel</p></div>
    </div>
    <div className="bottom-part"></div>
  </div>
</div>

    </div>
  );
};

export default Acceuil;
