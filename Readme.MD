# Réunion Enseignant

Ce projet est une application web React permettant de gérer les réunions des enseignants avec des fonctionnalités de filtrage par date et heure. L'interface utilisateur offre une expérience intuitive et utilise des composants modernes pour un affichage clair et interactif.

---

## Fonctionnalités

- **Affichage des réunions** : Liste des réunions avec leur date, description, salle et heure.
- **Filtrage avancé** : 
  - Filtrage des réunions par date.
  - Filtrage par heure.
- **Composants modernes** : Utilisation de Material-UI pour les sélecteurs de date et une interface professionnelle.

---

## Technologies Utilisées

### Frontend

- **React** : Création des composants interactifs.
- **Material-UI** : Pour les éléments d'interface utilisateur tels que les sélecteurs de date et d'heure.
- **Day.js** : Gestion et manipulation des dates.

---

## Prérequis

- **Node.js** (version 16 ou supérieure) 
- **npm** (version 8 ou supérieure) ou **Yarn**

---

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone <url-du-depot>
   cd <nom-du-dossier>
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```
   ou si vous utilisez Yarn :
   ```bash
   yarn install
   ```

3. **Lancer le projet** :
   ```bash
   npm start
   ```
   ou avec Yarn :
   ```bash
   yarn start
   ```

4. Ouvrez votre navigateur à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

---

## Utilisation

1. **Filtrer par date** :
   - Utilisez le sélecteur de date pour choisir une date.
   - Cliquez sur l'icône pour effacer la date sélectionnée.

2. **Filtrer par heure** :
   - Entrez une heure dans le champ de saisie pour filtrer les réunions.

3. **Consulter les réunions** :
   - La liste des réunions s'actualise automatiquement en fonction des filtres appliqués.

---

## Structure du Projet

```plaintext
client/
├── public/         # Fichiers publics (HTML, icônes)
├── src/            # Code source principal
│   ├── components/   # Composants React
│   ├── App.js        # Composant principal
│   ├── index.js      # Point d'entrée de l'application
│   └── styles/        # Fichiers de style CSS
├── package.json   # Gestionnaire de dépendances
└── README.md       # Documentation du projet
```

---

## Dépendances Principales

- **React** : ^18.0.0
- **@mui/material** : ^5.0.0
- **@mui/x-date-pickers** : ^6.0.0
- **Day.js** : ^1.11.9

---

## Développement

### Linter et Formatage
- Assurez-vous de suivre les conventions de code avec un linter comme ESLint.
- Utilisez Prettier pour le formatage du code.

### Ajouter de nouvelles fonctionnalités
- Créez de nouveaux composants dans le dossier `components/`.
- Suivez la structure du projet pour maintenir une organisation claire.

---

## Problèmes Courants

1. **Conflits de versions avec npm** :
   - Si vous voyez une erreur `ERESOLVE`, utilisez cette commande :
     ```bash
     npm install --legacy-peer-deps
     ```

2. **Erreur de chargement de la page** :
   - Vérifiez si tous les composants sont correctement importés.
   - Redémarrez le serveur avec `npm start`.

---

## Contribution

Les contributions sont les bienvenues ! Merci de suivre les étapes suivantes :

1. Forker ce dépôt.
2. Créer une branche pour vos modifications :
   ```bash
   git checkout -b ma-branche
   ```
3. Pousser les modifications et créer une Pull Request.

---

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.
