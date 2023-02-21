import { EtatLivre } from './etat-livre.model';
import { Categorie } from './categorie.model';
export interface Livre{
  idLivre: number,
  titre: String,
  isbn: String,
  dateEdition: Date,
  categorie: Categorie,
  disponible: Boolean,
  etatLivre: EtatLivre,
  desc?: String,
  created: Date
}
