import { Dossier } from "./dossier";

export class Chambre {
    idChambre:number;
    numChambre:number;
    capacite:number;
    dossier:Dossier[];
    dateEntree:Date;
    dateSortie:Date;
}
