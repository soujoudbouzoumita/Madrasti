import React, { useState, useEffect, useRef } from 'react';
import maison from './maison.png';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
    console.log('Navbar rendu');

    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isStudiesDropdownOpen, setStudiesDropdownOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleUserDropdown = () => {
        setUserDropdownOpen((prev) => !prev);
        setStudiesDropdownOpen(false); // Fermer l'autre menu déroulant si ouvert
    };

    const toggleStudiesDropdown = () => {
        setStudiesDropdownOpen((prev) => !prev);
        setUserDropdownOpen(false); // Fermer l'autre menu déroulant si ouvert
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

    return (
        <nav ref={navbarRef} style={{ padding: '0rem', backgroundColor: '#f3f1e0', color: 'black' }}>
            {/* Contenu de la navbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: '#e3a9ee' }}>
                {/* Logo et navigation à gauche */}
                <div>
                    <img src="path-to-your-logo.png" alt="Logo" style={{ height: '40px' }} />
                </div>

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

            {/* Menu de navigation */}
            <div>
                <ul style={{ display: 'flex', justifyContent: 'left', listStyle: 'none', gap: '1rem', margin: 10, paddingTop: '3px', paddingBottom: '10px', paddingLeft: '2px' }}>
                    <li>
                        <Link to="acceuil" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'black' }}>
                            <img
                                src={maison}
                                alt="Acceuil"
                                style={{ height: '20px', borderRadius: '0%', marginLeft: '1rem', marginTop: '0rem' }}
                            />
                            Acceuil
                        </Link>
                    </li>

                    <li style={{ position: 'relative' }}>
                        <Link
                            to="#"
                            style={{ color: 'black', cursor: 'pointer' }}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleStudiesDropdown();
                            }}
                        >
                            Mes services ▼
                        </Link>
                        {isStudiesDropdownOpen && (
                            <ul
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    backgroundColor: '#444',
                                    padding: '0.5rem',
                                    listStyle: 'none',
                                    margin: 0,
                                    borderRadius: '5px',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 10,
                                }}
                            >
                                <li><Link to="emplois" style={{ color: 'white' }}>Emploi</Link></li>
                                <li><Link to="mesreunions" style={{ color: 'white' }}>Mes reunions</Link></li>
                                <li><Link to="examens" style={{ color: 'white' }}>Exams</Link></li>
                                <li><Link to="Cahierdetexte" style={{ color: 'white' }}>Cahierdetexte</Link></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link to="contact" style={{ color: 'black' }}>contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
