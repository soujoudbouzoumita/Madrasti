import React from "react";

const MeetingList = ({ meetings, onEdit, onDelete }) => (
  <div className="meeting-list">
    <h2>Liste des Réunions</h2>
    {meetings.length === 0 ? (
      <p>Aucune réunion programmée.</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Titre</th>
            <th>Détails</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.date}</td>
              <td>{meeting.title}</td>
              <td>{meeting.details}</td>
              <td>
                <button onClick={() => onEdit(meeting)}>Modifier</button>
                <button onClick={() => onDelete(meeting.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default MeetingList;
