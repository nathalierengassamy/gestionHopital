import { Component, OnInit } from '@angular/core';
import { RDV } from 'app/model/rdv';
import { RDVService } from 'app/services/rdv.service';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  rdvs!: any[];
  rdv:RDV=new RDV();
  utilisateurs!: any[];
  utilisateur:Utilisateur=new Utilisateur();

  constructor(private rdvService:RDVService, private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.findAllRDV();
    this.findAllUtilisateur();
  }

  findAllRDV(){
    this.rdvService.findAllRDV().subscribe(data => {this.rdvs = data;});
  }
  deleteRDV(id:number){
    this.rdvService.deleteRDV(id).subscribe(()=>{this.findAllRDV()});
  }
  saveRDV(){
    this.rdvService.saveRDV(this.rdv).subscribe(()=>{
      this.findAllRDV();
      this.rdv = new RDV();
    })
  }
    
  findAllUtilisateur(){
    this.utilisateurService.findAllUtilisateur().subscribe(data => {this.utilisateurs = data;});
  }
  deleteOrdonnance(id:number){
    this.utilisateurService.deleteUtilisateur(id).subscribe(()=>{this.findAllUtilisateur()});
  }
  saveOrdonnance(){
    this.utilisateurService.saveUtilisateur(this.utilisateur).subscribe(()=>{
      this.findAllUtilisateur();
      this.utilisateur = new Utilisateur();
    })

  }
}
