import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/signin", formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      switch (response.data.role) {
        case 2:
          navigate("/EleveDashbord");
          break;
        case 1:
          navigate("/EnseignantDashborad");
          break;
        case 0:
          navigate("/admin");
          break;
        default:
          throw new Error("Unknown role");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "Erreur lors de la connexion";
      setError(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email"> adresse email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mot de passe *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
          </div>
          <button type="submit" className="submit-button">
            Valider
          </button>
        </form>
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #e6d8e9;
        }

        .login-box {
          background-color: #f3f1e0;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 400%;
          max-width: 400px;
        }

        .login-box h2 {
          margin-bottom: 20px;
          text-align: center;
          color: #583a5e;
          width:100%;
        }

        .input-group {
          margin-bottom: 15px;
        }

        .input-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .input-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .forgot-password {
          margin-bottom: 15px;
          text-align: right;
        }

        .forgot-password a {
          color: #007bff;
          text-decoration: none;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        .submit-button {
          width: 100%;
          padding: 10px;
          background-color:  #583a5e;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .submit-button:hover {
          background-color: #218838;
        }

        .error {
          color: red;
          margin-bottom: 15px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default SignIn;
