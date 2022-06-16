import { Chambre } from "./chambre";
import { Facture } from "./facture";
import { Ordonnance } from "./ordonnance";
import { Utilisateur } from "./utilisateur";

export class Dossier {
    idDossier!:number;
    factures!:Facture[];
    ordonnances!:Ordonnance[];
    chambres!:Chambre[];
    user!:Utilisateur[];
}
