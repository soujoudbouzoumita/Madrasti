import React, { useEffect, useState } from "react";

// Exemple de données utilisateur simulées (remplacez par des données d'API)
const fakeUserData = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  avatar: "https://via.placeholder.com/150",
  bio: "Ingénieure en développement passionnée par la cybersécurité et le cloud.",
  contact: {
    phone: "+216 123 456 789",
    address: "Tunis, Tunisie",
  },
  interests: ["Développement", "Cybersécurité", "Cloud"],
};

const Profile = () => {
  const [user, setUser] = useState(null);

  // Simuler un appel API pour obtenir les données de l'utilisateur
  useEffect(() => {
    // Simuler un délai (peut être remplacé par un fetch réel)
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simuler un délai
      setUser(fakeUserData); // Remplacez par les données API
    };
    fetchData();
  }, []);

  if (!user) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <img src={user.avatar} alt={`${user.name}`} style={styles.avatar} />
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
        <div style={styles.info}>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Téléphone:</strong> {user.contact.phone}
          </p>
          <p>
            <strong>Adresse:</strong> {user.contact.address}
          </p>
        </div>
        <div style={styles.interests}>
          <h3>Centre d'intérêts :</h3>
          <ul>
            {user.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  profileCard: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  info: {
    marginTop: "20px",
    textAlign: "left",
  },
  interests: {
    marginTop: "20px",
    textAlign: "left",
  },
};

export default Profile;
