import { Livre } from './../model/livre/livre.model';
import { Categorie } from './../model/livre/categorie.model';
import { EtatLivre } from './../model/livre/etat-livre.model';
import { Auteur } from './../model/livre/auteur.model';
import { Exemplaire } from './../model/livre/exemplaire.model';

export const AUTEURS: Auteur[] = [{
  id: 2,
  nom: "Alain",
  prenom: "Uwezo",
  nomComplet: "Alain Uwezo",
  created: new Date()
},{
  id: 4,
  nom: "Arlon",
  prenom: "Baraka",
  nomComplet: "Arlon Baraka",
  created: new Date()
},{
  id: 3,
  nom: "Albin",
  prenom: "D'Avila",
  nomComplet: "Albin D'Avila",
  created: new Date()
},{
  id: 3,
  nom: "Malkia",
  prenom: "Angelique",
  nomComplet: "Malkia Angélique",
  created: new Date()
},{
  nom: "Aldo",
  prenom: "Ayale",
  id: 1,
  nomComplet: "Aldo Ayale",
  created: new Date()
}]

const etatLivre: EtatLivre = {
  id: 1,
  libelle: "Meilleur",
  created: new Date()
}

const categorie: Categorie = {
  id: 1,
  libelle: "Romance",
  createdAt: new Date()
}

const livre: Livre[] = [{
  idLivre: 1,
  etatLivre: etatLivre,
  categorie: categorie,
  dateEdition: new Date(),
  isbn: "092-23-494-22",
  titre: "Un voyage pour deux",
  disponible: true,
  created: new Date(),
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore impedit saepe eveniet odio magni, neque odit officiis possimus rem dolore quasi consequuntur iusto repellendus laborum molestias assumenda. Nostrum, nobis."
},{
  idLivre: 2,
  etatLivre: etatLivre,
  categorie: categorie,
  dateEdition: new Date(),
  isbn: "092-23-494-22",
  titre: "Le parc des princes",
  disponible: false,
  created: new Date(),
  desc: "Meilleur livre de toute la planete terre et de tout l'univers"
},{
  idLivre: 3,
  etatLivre: etatLivre,
  categorie: categorie,
  dateEdition: new Date(),
  isbn: "02-3-44-23",
  titre: "Un prince à nez york",
  disponible: true,
  created: new Date(),
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore impedit saepe eveniet odio magni, neque odit officiis possimus rem dolore quasi consequuntur iusto repellendus laborum molestias assumenda. Nostrum, nobis."
},{
  idLivre: 4,
  etatLivre: etatLivre,
  categorie: categorie,
  dateEdition: new Date(),
  isbn: "22-13-594-102",
  titre: "Avangers",
  disponible: false,
  created: new Date(),
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore impedit saepe eveniet odio magni, neque odit officiis possimus rem dolore quasi consequuntur iusto repellendus laborum molestias assumenda. Nostrum, nobis."
}]

export const EXEMPLAIRES: Exemplaire[] = [
  {
    idExemplaire: 1,
    auteur: AUTEURS[0],
    livre: livre[1],
    nbExemplaire: 4
  },{
    idExemplaire: 2,
    auteur: AUTEURS[4],
    livre: livre[3],
    nbExemplaire: 5
  },{
    idExemplaire: 3,
    auteur: AUTEURS[1],
    livre: livre[2],
    nbExemplaire: 2
  },{
    idExemplaire: 4,
    auteur: AUTEURS[2],
    livre: livre[1],
    nbExemplaire: 1
  },{
    idExemplaire: 5,
    auteur: AUTEURS[3],
    livre: livre[1],
    nbExemplaire: 1
  },{
    idExemplaire: 6,
    auteur: AUTEURS[0],
    livre: livre[3],
    nbExemplaire: 1
  },{
    idExemplaire: 7,
    auteur: AUTEURS[0],
    livre: livre[0],
    nbExemplaire: 1
  },{
    idExemplaire: 8,
    auteur: AUTEURS[2],
    livre: livre[2],
    nbExemplaire: 1
  },{
    idExemplaire: 9,
    auteur: AUTEURS[1],
    livre: livre[3],
    nbExemplaire: 1
  },{
    idExemplaire: 10,
    auteur: AUTEURS[3],
    livre: livre[3],
    nbExemplaire: 1
  },{
    idExemplaire: 11,
    auteur: AUTEURS[2],
    livre: livre[2],
    nbExemplaire: 1
  },{
    idExemplaire: 12,
    auteur: AUTEURS[0],
    livre: livre[0],
    nbExemplaire: 1
  },{
    idExemplaire: 13,
    auteur: AUTEURS[2],
    livre: livre[1],
    nbExemplaire: 1
  },{
    idExemplaire: 14,
    auteur: AUTEURS[0],
    livre: livre[1],
    nbExemplaire: 1
  }
]

export const CATEGORIES: Categorie [] = [{
  id: 1,
  libelle: 'Romance',
  createdAt: new Date()
}, {
  id: 2,
  libelle: 'Reseaux',
  createdAt: new Date()
}, {
  id: 3,
  libelle: 'Programmation',
  createdAt: new Date()
}, {
  id: 4,
  libelle: 'Design',
  createdAt: new Date()
}]

export const ETAT_LIVRES: EtatLivre[] = [{
  id: 1,
  libelle: 'Bien',
  created: new Date()
},{
  id: 2,
  libelle: 'Très bon',
  created: new Date()
}, {
  id: 3,
  libelle: 'Mauvais',
  created: new Date()
}, {
  id: 4,
  libelle: 'Très mauvais',
  created: new Date()
}]
