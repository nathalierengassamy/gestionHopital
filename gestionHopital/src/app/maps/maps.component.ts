import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'app/model/message';
import { MessageService } from 'app/services/message.service';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    messages!: any[];
    message:Message=new Message();
    utilisateurs!: any[];
  utilisateur:Utilisateur=new Utilisateur();
  constructor(private router: Router, private messageService:MessageService, private utilisateurService:UtilisateurService) { }

  ngOnInit(): void{
    this.findAllMessage();
    this.findAllUtilisateur();
}
findAllMessage(){
    this.messageService.findAllMessage().subscribe(data => {this.messages = data;});
  }
  deleteMessage(id:number){
    this.messageService.deleteMessage(id).subscribe(()=>{this.findAllMessage()});
  }
  saveMessage(){
    this.messageService.saveMessage(this.message).subscribe(()=>{
      this.findAllMessage();
      this.message = new Message();
    })
}
    findAllUtilisateur(){
        this.utilisateurService.findAllUtilisateur().subscribe(data => {this.utilisateurs = data;});
      }
      deleteUtilisateur(id:number){
        this.utilisateurService.deleteUtilisateur(id).subscribe(()=>{this.findAllUtilisateur()});
      }
      saveUtilisateur(){
        this.utilisateurService.saveUtilisateur(this.utilisateur).subscribe(()=>{
          this.findAllUtilisateur();
          this.utilisateur = new Utilisateur();
        })

  }

}
