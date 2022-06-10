import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs!: any[];
  utilisateur:Utilisateur=new Utilisateur();

  constructor(private ordonnanceService:UtilisateurService) { }

  ngOnInit(): void {
    this.findAllUtilisateur();
  }
  findAllUtilisateur(){
    this.ordonnanceService.findAllUtilisateur().subscribe(data => {this.utilisateurs = data;});
  }
  deleteOrdonnance(id:number){
    this.ordonnanceService.deleteUtilisateur(id).subscribe(()=>{this.findAllUtilisateur()});
  }
  saveOrdonnance(){
    this.ordonnanceService.saveUtilisateur(this.utilisateur).subscribe(()=>{
      this.findAllUtilisateur();
      this.utilisateur = new Utilisateur();
    })
  }

}
