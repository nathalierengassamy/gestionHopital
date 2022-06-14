import { Dossier } from "./dossier";

export class Facture {
    idFacture:number;
    montant:number;
    destinataire:String;
    paye:boolean;
    dossier:Dossier[];
}
