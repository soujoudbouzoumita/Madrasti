import React from 'react';
import NoteList from '../components/NoteList';
import '../styles/notes.css'
const PagePrincipale = () => {
  const notes = [
    {
      title: 'Réunion d\'information',
      content: 'La réunion d\'information aura lieu le vendredi 12 décembre à 14h. Soyez à l\'heure.',
      date: '12 Décembre 2024',
    },
    {
      title: 'Mise à jour du système',
      content: 'Le système sera mis à jour le 15 décembre. Veuillez enregistrer vos travaux avant cette date.',
      date: '10 Décembre 2024',
    },
    {
      title: 'Rappels de la direction',
      content: 'Veuillez soumettre vos rapports de performance avant la fin de la semaine.',
      date: '8 Décembre 2024',
    },
  ];

  return (
    <div className="page-principale">
      <h1>Notes Importantes de l'Administration</h1>
      <NoteList notes={notes} />
    </div>
  );
};

export default PagePrincipale;
