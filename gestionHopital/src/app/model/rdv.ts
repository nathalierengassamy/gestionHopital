import { TypeRDV } from "./type-rdv";
import { Utilisateur } from "./utilisateur";

export class RDV {
    idRDV!:number;
    typeRDV!:String;
    heureRDV!:String;
    dateRDV!:Date;
    diagnostic!:String;
    user!:Utilisateur[];
    typerdv!:TypeRDV[];
}
