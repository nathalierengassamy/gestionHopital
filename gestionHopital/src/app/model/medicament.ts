import { Ordonnance } from "./ordonnance";

export class Medicament {
    idMedicament:number;
    libelleMedicament:String;
    prixMedicament:number;
    dateExpiration:Date;
    stock:number;
    ordonnances!:Ordonnance[];
    utilisateur!:Utilisateur[];

}
