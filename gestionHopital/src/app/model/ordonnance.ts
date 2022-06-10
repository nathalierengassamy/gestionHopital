import { _DisposeViewRepeaterStrategy } from "@angular/cdk/collections";
import { Dossier } from "./dossier";
import { Utilisateur } from "./utilisateur";

export class Ordonnance {
    idOrdonnance:number;
    consigne:String;
    medicament:String;
    user:Utilisateur[];
    dossier:Dossier[];
}
