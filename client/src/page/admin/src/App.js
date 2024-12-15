import React from 'react';
import Acceuil from '../administration.jsx'; 
import Emploi from './page/emploi/pages/TimetablePage.jsx';
import Reu from './page/planningreu/pages/MeetingPlannerPage.jsx';
import Navbar from './page/navbar/pages/Navbar.jsx';
import Examens from './page/planningexamens/pages/PlanningExamenPage.jsx';
import Rec from './page/reclamations/pages/ReclamationsPage.jsx';  
import { Routes, Route } from "react-router-dom"; 
import Notes from './page/notes/pages/NotesPage.jsx'; 
import Calendar from './page/calendrier/pages/MonthlyCalendar.jsx';  

const AdministrationDashboad = () => {
  return (
      <>
      <Navbar userType="Administration" />
      <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/Acceuil" element={<Acceuil />} />
            <Route path="/emplois" element={<Emploi />} />
            <Route path="/examens" element={<Examens />} />
            <Route path="/reunions" element={<Reu />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/reclamations" element={<Rec />} />
            <Route path="/calendrier" element={<Calendar />} />
            <Route path="/contact" element= {(<p>No Page </p>)}/>
          </Routes>
        </div>
      </>
  );
}

export default AdministrationDashboad;