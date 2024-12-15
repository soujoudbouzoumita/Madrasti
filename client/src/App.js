import React from "react";/*{ useState, useEffect } from "react";*/
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./auth/SingIn";
import EleveDashbord from "./page/eleve/EleveDashbord";
import AdministrationDashboad from "./page/admin/src/App";
import EnseignantDashboard from "./page/enseignant/src/EnseignantDashboard";
import LogoutPage from "./logout";
const App = () => {
  
 

  
  return (

      <Router>
        <Routes>
          {/* Route de connexion */}
          <Route path="/" element={<SignIn />} />
          {/* Tableaux de bord spécifiques */}
          <Route path="/EleveDashbord/*" element={<EleveDashbord />} />
          <Route path="/EnseignantDashborad/*" element={<EnseignantDashboard />} />
          <Route path="/admin/*" element={<AdministrationDashboad />} />
          <Route path="/logout" element={<LogoutPage />} />
          {/* Redirection pour les routes non définies */}
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    
    );
};

export default App;