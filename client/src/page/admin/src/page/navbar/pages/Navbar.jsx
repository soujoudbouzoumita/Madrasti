import React, { useState, useEffect, useRef } from "react";
import { IoHome } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { BsChatDotsFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md"; 
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ handleLogout, userType }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);  // Create a ref for the dropdown*
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isStudiesDropdownOpen, setStudiesDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleUserDropdown = () => {
      setUserDropdownOpen((prev) => !prev);
      setStudiesDropdownOpen(false); // Fermer l'autre menu déroulant si ouvert
  };

  const closeDropdowns = () => {
      setUserDropdownOpen(false);
      setStudiesDropdownOpen(false);
  };

  // Gestion des clics extérieurs pour fermer les menus déroulants
  useEffect(() => {
      const handleClickOutside = (event) => {
          if (navbarRef.current && !navbarRef.current.contains(event.target)) {
              closeDropdowns();
          }
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, []);

  const renderMenuItems = () => {
    if (userType === "Administration") {
      return (
        <>
          <li><Link to="emplois">Emplois</Link></li>
          <li><Link to="reunions">Planning des réunions</Link></li>
          <li><Link to="examens">Planning d'examen</Link></li>
          <li><Link to="notes">Notes</Link></li>
          <li><Link to="calendrier">Calendrier</Link></li>
        </>
      );
    } else if (userType === "Eleve") {
      return (
        <>
          <li><Link to="cours">Cours</Link></li>
          <li><Link to="travail">Travail</Link></li>
          <li><Link to="support">Support</Link></li>
          <li><Link to="notes">Notes</Link></li>
          <li><Link to="examens">Examens</Link></li>
        </>
      );
    } else if (userType === "Enseignant") {
      return (
        <>
          <li><Link to="enseignant/cahierdetexte">Cahier de texte</Link></li>
          <li><Link to="enseignant/Exams">Examens</Link></li>
          <li><Link to="enseignant/course">Cours</Link></li>
          <li><Link to="enseignant/support">Support</Link></li>
          <li><Link to="enseignant/reu">Réunions</Link></li>
          <li><Link to="enseignant/notes">Notes</Link></li>
        </>
      );
    } else {
      return <li>Aucun accès disponible</li>;
    }
  };
  

  // Toggle dropdown visibility
  const toggleDropdown = (event) => {
    event.stopPropagation();  // Prevent the click event from bubbling up
    setIsDropdownVisible(prev => !prev);
  };

  // Close dropdown if click happens outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click happened outside of the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    // Add event listener for outside clicks
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <nav className="navbar">
      {/* Header section */}
      <div className="navbar-header">
        <div className="navbar-name">
          <i className="fa-solid fa-school"></i>
          <span className="name-app">madrasti</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem'}}>
            {/* User menu aligné à droite */}
            <div style={{ position: 'relative' }}>
                <Link
                    to="#"
                    style={{ color: 'black', textDecoration: 'none' }}
                    onClick={(e) => {
                        e.preventDefault();
                        toggleUserDropdown();
                    }}
                >
                    User
                </Link>
                {isUserDropdownOpen && (
                    <ul
                        style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0, // Alignement à droite
                            backgroundColor: '#444',
                            padding: '0.5rem',
                            listStyle: 'none',
                            margin: 0,
                            borderRadius: '5px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            zIndex: 10,
                        }}
                    >
                        <li><Link to="profile" style={{ color: 'white', textDecoration: 'none' }}>Voir mon profil</Link></li>
                        <li><Link to="/logout" onClick={handleLogout}>Déconnexion</Link></li>
                    </ul>
                )}
            </div>
        </div>
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        <li>
          <Link to="Acceuil" className="navbar-item">
            <IoHome size={20} color="#37D6CE" />
            Accueil
          </Link>
        </li>
        <li className="navbar-dropdown">
          <span
            className="navbar-item dropdown-toggle" onClick={toggleDropdown}>
            <FiBookOpen size={20} color="#FF8156" />
            Mes services
            <MdArrowDropDown size={20} color="#444" />
          </span>
          {isDropdownVisible && (
            <ul ref={dropdownRef} className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              {renderMenuItems()}
            </ul>
          )}
        </li>
        <li>
          <Link to="contact" className="navbar-item">
            <BsChatDotsFill size={20} color="#FF7BB5" />
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
