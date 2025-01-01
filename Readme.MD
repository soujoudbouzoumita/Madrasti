# Plateforme Éducative

## Description
Cette plateforme éducative est une application web conçue pour faciliter la communication et la gestion des utilisateurs dans un cadre éducatif. Elle propose trois interfaces distinctes : **Étudiant**, **Enseignant**, et **Administration**, où chaque utilisateur peut se connecter, s'inscrire, envoyer des messages et gérer les informations pertinentes de manière sécurisée et flexible.

## Fonctionnalités Principales
### 1. Authentification et Gestion des Rôles
- **Inscription et Connexion sécurisées** avec gestion des rôles (Étudiant, Enseignant, Administrateur).
- Gestion de session via **JSON Web Tokens (JWT)**.
- Protection des routes et vérification des autorisations.

### 2. Interface Étudiant
- Accès aux informations personnelles.
- Envoi et réception de messages.
- Gestion des données éducatives pertinentes.

### 3. Interface Enseignant
- Gestion des interactions avec les étudiants (messages, documents, etc.).
- Accès aux outils pédagogiques et aux ressources partagées.

### 4. Interface Administrateur
- Supervision des utilisateurs (création, modification, suppression).
- Gestion des rôles et des autorisations.
- Accès à des statistiques globales sur l’utilisation de la plateforme.

## Technologies Utilisées
### **Front-End**
- **React.js** : Pour une interface utilisateur dynamique et réactive.
- **React Router v6** : Gestion de la navigation et des différentes interfaces utilisateur.

### **Back-End**
- **Node.js** avec **Express.js** : Gestion des API et de la logique côté serveur.
- **Mongoose** : Modélisation des données et interactions avec MongoDB.
- **JWT** : Sécurisation des sessions utilisateur.

### **Base de Données**
- **MongoDB** : Base de données NoSQL pour stocker les informations des utilisateurs, messages, et autres données pertinentes.

### **Autres Outils**
- **Postman** : Tests des API.
- **Git** et **GitHub** : Gestion de version et collaboration.

## Installation et Utilisation
### 1. Prérequis
- **Node.js** installé sur votre machine.
- **MongoDB** en cours d’exécution localement ou sur un service cloud.
- **Git** pour cloner le projet.

### 2. Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
