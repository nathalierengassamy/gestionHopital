import { Dossier } from "./dossier";
import { Medicament } from "./medicament";
import { Message } from "./message";
import { Ordonnance } from "./ordonnance";
import { RDV } from "./rdv";
import { Role } from "./role";


export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    username!:string;
    password!:string;
    dateNaissance!:Date;
    age!:number;
    adresseUtilisateur!:string;
    ageUtilisateur!:number;
    telephone!:number;
    roles!:Role[];
    dossiers!:Dossier;
    medicaments!:Medicament[];
    messages!:Message[];
    ordonnances!:Ordonnance[];
    rdvs!:RDV[];
}
