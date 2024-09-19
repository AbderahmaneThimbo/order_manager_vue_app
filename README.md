# Gestion des Commandes

Ce projet est une application web développée avec Vue.js 3. Il permet de gérer les opérations CRUD pour les commandes, les clients, et les produits dans un système de gestion des commandes.

## Fonctionnalités

### Commandes

- **Ajouter une nouvelle commande** :  Un formulaire permet d'ajouter une nouvelle commande.
- **Lister toutes les commandes** :  Les commandes ajoutées sont affichées dans un tableau.
- **Voir les détails d'une commande** : Affiche toutes les informations d'un livre sélectionné.
- **Mettre à jour une commande** : Permet de modifier les détails d'une commande existante.
- **Supprimer une commande** : Supprime une commande.

### Clients

- **Ajouter un nouveau client** : Un formulaire permet d'ajouter un nouveau client
- **Lister tous les clients** : Les clients sont affichés dans un tableau.
- **Voir les détails d'un client** :  Affiche toutes les informations d'un client sélectionné
- **Mettre à jour les informations d'un client** : Permet de modifier les détails d'un client existant.
- **Supprimer un client** : Supprime un client.

### Produits

- **Ajouter un nouveau produit** : Un formulaire permet d'ajouter un nouveau produit.
- **Lister tous les produit** : Les produits sont affichés dans un tableau.
- **Voir les détails d'un produit** : Affiche toutes les informations d'un produit sélectionné.
- **Mettre à jour un produit** : Permet de modifier les détails d'un produit existant.
- **Supprimer un produit** : Supprime un produit.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé l'élément suivant :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/AbderahmaneThimbo/order_manager_vue_app.git
   ```

   ```bash
   cd order_manager_vue_app
   ```
   
2. **Installer les dépendances** :

   ```bash
   npm install
   ```

3. **Lancer l'application** :
   ```bash
   npm run dev
   ```

## Utilisation

- Accédez à l'application via `http://localhost:5173/` dans votre navigateur.
- Naviguez entre les pages Commandes, Clients, et Produits via le menu en haut de la page.

## Structure du Projet

- `src/` : Contient les composants Vue.js et les fichiers liés à l'application.

  - `components/` : Contient les dossiers commandes, clients, et produits, chaque dossier contient trois composants.

    - `List__.vue`: composant parent pour chaque module et il contient la logique d'affichage et la suppression
    - `Add___.vue`: composant contenant la gestion d'ajout
    - `Update___.vue`: composant contenant la gestion de modification

  - `router/` : Gère les routes pour la navigation entre les différentes sections de l'application.

## Auteur

[Abderahman Thimbo](https://github.com/AbderahmaneThimbo)

