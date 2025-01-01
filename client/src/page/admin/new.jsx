import React from "react";
import { Link } from "react-router-dom";
import image from './styles/image.png';
import image2 from './styles/image1.png';
import image1 from './styles/image2.png';
import image3 from './styles/image3.webp';

const Acceuil = () => {
  // ... (data remains the same)

  return (
    <div className="container mx-auto py-8 px-6 bg-gray-100">
      {/* Column 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Emplois du temps Block */}
          {/* ... (existing block) */}

          {/* Réunions Block */}
          {/* ... (existing block) */}
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {/* Examens Block */}
          {/* ... (existing block) */}

          {/* Réclamations Block */}
          {/* ... (existing block) */}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Notes Importantes */}
          {/* ... (existing block) */}

          {/* Calendrier Examen */}
          <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-green-600">Calendrier des examens</h3>
              <Link to="examens" className="text-green-500 hover:text-green-700 transition-colors duration-300">
                <i className="fa-regular fa-calendar"></i>
              </Link>
            </div>
            <p className="text-gray-700">6 janvier : Début des examens du 1er semestre</p>
          </div>

          {/* Événements */}
          {/* ... (existing block) */}

          {/* Calendrier Annuel */}
          {/* ... (existing block) */}
        </div>
      </div>
    </div>
  );
};

export default Acceuil;