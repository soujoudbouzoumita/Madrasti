import React from "react";
import { Navigate, Routes, Route } from "react-router-dom"; 
import Acceuil from './Acceuil';
import Navbare from './component/Navbare';
import Cahierdetexte from './component/Cahierdetexte';
import Contact from './component/contact';
import Exams from './component/Exams';
import Course from './component/ProchainCours.jsx'
import Support from './component/SupportsDeCours.jsx'
import Reu from './component/ReunionEnseignant.jsx'
import Notes from './component/ImportantNotes.jsx'
import Events from './component/Event.jsx'
import Calendar from './component/Calendar.jsx'
const EnseignantDashboard = () => {
  return (
<div>
      <Navbare /> {/* Barre de navigation */}
      <div style={{ padding: "20px", minHeight: "80vh" }}>
        <Routes>
          {/* Redirection par défaut vers la page d'accueil */}
          <Route path="/" element={<Navigate to="acceuil" />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="enseignant/cahierdetexte" element={<Cahierdetexte />} />
          <Route path="enseignant/contact" element={<Contact />} />
          <Route path="enseignant/Exams" element={<Exams />} />
          <Route path="enseignant/course" element={<Course />} />
          <Route path="enseignant/support" element={<Support />} />
          <Route path="enseignant/reu" element={<Reu />} />
          <Route path="enseignant/notes" element={<Notes />} />
          <Route path="enseignant/events" element={<Events />} />
          <Route path="enseignant/calendar" element={<Calendar />} />

        </Routes>
      </div>
    </div>
  );
};

export default EnseignantDashboard;