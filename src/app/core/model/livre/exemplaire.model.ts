import { Livre } from './livre.model';
import { Auteur } from './auteur.model';
export interface Exemplaire{
  idExemplaire: number,
  nbExemplaire: number,
  auteur: Auteur,
  livre: Livre
}
