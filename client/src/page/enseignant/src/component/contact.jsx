// components/StudentContact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentContact = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [users, setUsers] = useState([]); // Stores the list of users (teachers)
  const [messages, setMessages] = useState([]); // Stores the list of messages (fetched but unused here)

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Include JWT token if required
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Fetch messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/messages', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Include JWT token if required
        });
        setMessages(response.data); // Only fetched, not displayed
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, []);

  // Handle message send
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/send',
        { receiverId: recipient, text: message },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } } // Include JWT token if required
      );
      setMessage(''); // Clear the message field after sending
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSendMessage}>
        <label>Destinataire :</label>
        <select value={recipient} onChange={(e) => setRecipient(e.target.value)} required>
          <option value="">Sélectionnez un eleve</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <br />
        <label>Message :</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrivez votre message ici"
          required
        />
        <br />
        <button type="submit">Envoyer</button>
      </form>

      <div>
        <h2>Histoire des messages</h2>
        <ul>
          {messages.map((msg) => (
            <li key={msg._id}>
              <p><strong>De :</strong> {msg.sender.name}</p> {/* Display sender's name */}
              <p><strong>À :</strong> Vous</p> {/* Display "you" for receiver */}
              <p><strong>Contenu :</strong> {msg.text}</p> {/* Display the message content */}
              <p><strong>Date :</strong> {new Date(msg.createdAt).toLocaleString()}</p> {/* Display message creation date */}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentContact;
