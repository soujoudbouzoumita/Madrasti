import React, { useState } from "react";
import MeetingList from "../components/MeetingList";
import MeetingForm from "../components/MeetingForm";
import "../styles/MeetingPlanner.css";

const MeetingPlannerPage = () => {
  const [meetings, setMeetings] = useState([]); // Liste des réunions
  const [selectedMeeting, setSelectedMeeting] = useState(null); // Réunion sélectionnée pour modification

  // Ajouter ou mettre à jour une réunion
  const handleSaveMeeting = (newMeeting) => {
    if (selectedMeeting) {
      setMeetings(
        meetings.map((meeting) =>
          meeting.id === selectedMeeting.id ? { ...newMeeting, id: meeting.id } : meeting
        )
      );
    } else {
      setMeetings([...meetings, { ...newMeeting, id: Date.now() }]);
    }
    setSelectedMeeting(null);
  };

  // Supprimer une réunion
  const handleDeleteMeeting = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  return (
    <div className="meeting-planner-page">
      <h1>Gestion des Réunions</h1>
      <MeetingList
        meetings={meetings}
        onEdit={(meeting) => setSelectedMeeting(meeting)}
        onDelete={handleDeleteMeeting}
      />
      <MeetingForm
        onSave={handleSaveMeeting}
        initialMeeting={selectedMeeting}
        onCancel={() => setSelectedMeeting(null)}
      />
    </div>
  );
};

export default MeetingPlannerPage;
