import React from 'react';
import NoteCard from './NoteCard.jsx';

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          title={note.title}
          content={note.content}
          date={note.date}
        />
      ))}
    </div>
  );
};

export default NoteList;
