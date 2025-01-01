import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentContact = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
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
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setMessages(response.data);
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
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  // Inline styles
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f7f4fc',
      color: '#4c3b99',
    },
    container: {
      width: '90%',
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e0d5f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
    },
    select: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #d1c4f7',
      borderRadius: '4px',
      fontSize: '16px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #d1c4f7',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#6a57d1',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#5842b8',
    },
    history: {
      width: '90%',
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e0d5f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    messageItem: {
      marginBottom: '15px',
      padding: '15px',
      backgroundColor: '#f4effc',
      border: '1px solid #d1c4f7',
      borderRadius: '6px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    messageContent: {
      margin: '5px 0',
    },
    hr: {
      margin: '10px 0',
      border: 0,
      borderTop: '1px solid #e0d5f9',
    },
  };

  return (
    <div style={styles.body}>
      <h1 style={{ textAlign: 'center', color: '#6a57d1' }}>Contact</h1>
      <form onSubmit={handleSendMessage} style={styles.container}>
        <label style={styles.label}>Destinataire :</label>
        <select
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
          style={styles.select}
        >
          <option value="">Sélectionnez un enseignant</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <label style={styles.label}>Message :</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrivez votre message ici"
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Envoyer
        </button>
      </form>

      <div style={styles.history}>
        <h2 style={{ textAlign: 'center', color: '#6a57d1' }}>Histoire des messages</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.map((msg) => (
            <li key={msg._id} style={styles.messageItem}>
              <p style={styles.messageContent}>
                <strong>De :</strong> {msg.sender.name}
              </p>
              <p style={styles.messageContent}>
                <strong>À :</strong> Vous
              </p>
              <p style={styles.messageContent}>
                <strong>Contenu :</strong> {msg.text}
              </p>
              <p style={styles.messageContent}>
                <strong>Date :</strong>{' '}
                {new Date(msg.createdAt).toLocaleString()}
              </p>
              <hr style={styles.hr} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentContact;
