# Kasa — Application web de location immobilière

Application front-end développée en **React** pour Kasa, une plateforme de location d'appartements entre particuliers. Ce projet a été réalisé dans le cadre de la formation Développeur Web d'OpenClassrooms (Projet 5).

Il s'agit de la refonte complète du front-end, migrant d'une ancienne stack ASP.NET vers une application React moderne, responsive et fidèle aux maquettes Figma.

## Aperçu

L'application comprend quatre pages :

- **Accueil** — galerie des logements disponibles
- **Fiche logement** — détail d'un bien avec carrousel, équipements et description
- **À propos** — présentation des engagements de Kasa
- **Page 404** — gestion des routes et identifiants invalides

## Fonctionnalités

- Navigation multi-pages sans rechargement (Single Page Application)
- Galerie de logements générée dynamiquement à partir de données JSON
- Carrousel d'images avec navigation circulaire (retour à la première image après la dernière, et inversement)
- Composants dépliants (Collapse) avec animation de déroulement synchronisée
- Affichage de la note sous forme d'étoiles
- Redirection automatique vers la page 404 pour tout identifiant de logement invalide
- Interface entièrement responsive (desktop et mobile)

## Stack technique

- **React** — bibliothèque de construction d'interfaces
- **React Router** — gestion du routage côté client
- **Vite** — outil de build et serveur de développement
- **Sass (SCSS)** — préprocesseur CSS, avec architecture par composants
- **JavaScript (ES6+)**

## Installation

Prérequis : [Node.js](https://nodejs.org/) (version LTS recommandée) doit être installé.

Clonez le dépôt :

```bash
git clone https://github.com/corentin-leroy/Kasa.git
cd Kasa
```

Installez les dépendances :

```bash
npm install
```

## Lancement

Démarrez le serveur de développement :

```bash
npm run dev
```

L'application est alors accessible à l'adresse indiquée dans le terminal (par défaut `http://localhost:5173`).

Pour générer la version de production :

```bash
npm run build
```

## Structure du projet

```
src/
├── assets/         Images, logos et icônes
├── components/     Composants réutilisables (Header, Footer, Card, Banner, Collapse, Slideshow, Router)
├── pages/          Pages liées aux routes (Home, About, Housing, Error)
├── data/           Données des logements (JSON)
├── styles/         Styles globaux, variables et mixins Sass
├── App.jsx         Composant racine
└── main.jsx        Point d'entrée de l'application
```

## Contexte

Projet réalisé dans le cadre du parcours Développeur Web d'OpenClassrooms. Les maquettes et les contraintes techniques (utilisation de Vite, React Router et Sass, respect des coding guidelines) ont été fournies par l'énoncé du projet.
