import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Accueil from "./Accueil.jsx"; // Page d'accueil
import Contact from "./pages/contact.jsx"; // Page de contact
import Profile from "./pages/Profile.jsx"; // Page de profil
import Cours from "./pages/prochainCours.jsx"
import Travail from "./pages/cahierDeTexte.jsx"
import Support from "./pages/supportDeCours.jsx"
import Notes from "./pages/releveDeNotes.jsx"
import Important from "./pages/notesImportantes.jsx"
import Exams from "./pages/calendrierExamens.jsx"
import Events from "./pages/evenements.jsx"
import Calendar from "./pages/calendrierAnnuel.jsx"
import Navbar from "../navbar/pages/Navbar.jsx";

const EleveDashboard = () => {
  return (
    <>
      <Navbar userType="Eleve" />
      <div>
        <Routes>
          {/* Redirection par défaut vers la page d'accueil */}
          <Route path="/" element={<Accueil />}/>
          <Route path="/Acceuil" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/travail" element={<Travail />} />
          <Route path="/support" element={<Support />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/important" element={<Important />} />
          <Route path="/examens" element={<Exams />} />
          <Route path="/events" element={<Events />} />
          <Route path="/calendrier" element={<Calendar />} />
        </Routes>
      </div>
    </>
  );
};

export default EleveDashboard;
