// src/components/ExamScheduleTable.jsx
import React from 'react';

const ExamScheduleTable = ({ schedule }) => {
  return (
    <div className="exam-schedule">
      <h3>Planning des examens</h3>
      <table>
        <thead>
          <tr>
            <th>Matin</th>
            <th>Après-midi</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, index) => (
            <tr key={index}>
              <td>{row.matin}</td>
              <td>{row.aprem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamScheduleTable;
