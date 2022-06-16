import { Utilisateur } from "./utilisateur";

export class Message {
    idMessage!:number;
    libelle!:string;
    user!:Utilisateur[];
}
