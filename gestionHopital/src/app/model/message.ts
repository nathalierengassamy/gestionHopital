import { Utilisateur } from "./utilisateur";

export class Message {
    idMessage!:number;
    libelle!:string;
    date!:Date;
    user!:Utilisateur[];
}
