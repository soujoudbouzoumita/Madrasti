import React, { useState, useEffect } from "react";

const MeetingForm = ({ onSave, initialMeeting, onCancel }) => {
  const [meeting, setMeeting] = useState({
    date: "",
    title: "",
    details: "",
  });

  useEffect(() => {
    if (initialMeeting) {
      setMeeting(initialMeeting);
    } else {
      setMeeting({ date: "", title: "", details: "" });
    }
  }, [initialMeeting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeeting({ ...meeting, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(meeting);
    setMeeting({ date: "", title: "", details: "" });
  };

  return (
    <div className="meeting-form">
      <h2>{initialMeeting ? "Modifier Réunion" : "Ajouter Réunion"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date :
          <input
            type="date"
            name="date"
            value={meeting.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Titre :
          <input
            type="text"
            name="title"
            value={meeting.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Détails :
          <textarea
            name="details"
            value={meeting.details}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-actions">
          <button type="submit">Enregistrer</button>
          {onCancel && <button type="button" onClick={onCancel}>Annuler</button>}
        </div>
      </form>
    </div>
  );
};

export default MeetingForm;
