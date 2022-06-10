import { Chambre } from "./chambre";
import { Facture } from "./facture";
import { Ordonnance } from "./ordonnance";
import { Utilisateur } from "./utilisateur";

export class Dossier {
    facture:Facture[];
    ordonnance:Ordonnance[];
    chambre:Chambre[];
    user:Utilisateur[];
}
