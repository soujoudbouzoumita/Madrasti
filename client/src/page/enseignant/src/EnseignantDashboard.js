import React from "react";
import { Navigate, Routes, Route } from "react-router-dom"; 
import Acceuil from './Acceuil';
import Cahierdetexte from './component/Cahierdetexte';
import Contact from './component/contact';
import Exams from './component/Exams';
import Course from './component/ProchainCours.jsx'
import Support from './component/SupportsDeCours.jsx'
import Notes from './component/ImportantNotes.jsx'
import Events from './component/Event.jsx'
import Calendar from './component/Calendar.jsx'
import Navbar from "../../navbar/pages/Navbar.jsx";
import ReunionEnseignant from "./component/ReunionEnseignant.jsx";

const EnseignantDashboard = () => {
  return (
    <div>
      <Navbar userType="Enseignant" />
      <div >
        <Routes>
          {/* Redirection par défaut vers la page d'accueil */}
          <Route path="/" element={<Navigate to="acceuil" />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/cahierdetexte" element={<Cahierdetexte />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Exams" element={<Exams />} />
          <Route path="/course" element={<Course />} />
          <Route path="/support" element={<Support />} />
          <Route path="/reu" element={<ReunionEnseignant />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/calendar" element={<Calendar />} />

        </Routes>
      </div>
    </div>
  );
};

export default EnseignantDashboard;