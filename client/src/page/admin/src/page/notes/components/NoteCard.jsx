import React from 'react';

const NoteCard = ({ title, content, date }) => {
  return (
    <div className="note-card">
      <h3 className="note-title">{title}</h3>
      <p className="note-date">{date}</p>
      <p className="note-content">{content}</p>
    </div>
  );
};

export default NoteCard;
