import { Component, OnInit } from '@angular/core';
import { RDV } from 'app/model/rdv';
import { RDVService } from 'app/services/rdv.service';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { Message } from 'app/model/message';
import { AppService } from 'app/app.service';
import { Chambre } from 'app/chambre';
import { Dossier } from 'app/model/dossier';
import { Facture } from 'app/model/facture';
import { Medicament } from 'app/model/medicament';
import { Ordonnance } from 'app/model/ordonnance';
import { ChambreService } from 'app/services/chambre.service';
import { DossierService } from 'app/services/dossier.service';
import { FactureService } from 'app/services/facture.service';
import { MedicamentService } from 'app/services/medicament.service';
import { MessageService } from 'app/services/message.service';
import { OrdonnanceService } from 'app/services/ordonnance.service';

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
  chambres!: any[];
  chambre:Chambre=new Chambre();
  medicaments!: any[];
  medicament:Medicament=new Medicament();
  factures!: any[];
  facture:Facture=new Facture();
  dossiers!: any[];
  dossier:Dossier=new Dossier();
  ordonnances!: any[];
  ordonnance:Ordonnance=new Ordonnance();
  messages!: any[];
  message:Message= new Message();
 
  
  constructor(private appService:AppService,private chambreService:ChambreService, private utilisateurService:UtilisateurService, private medicamentService:MedicamentService, private factureService:FactureService,
    private dossierService:DossierService, private ordonnanceService:OrdonnanceService,private rdvService:RDVService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.findAllChambre();
    this.findAllUtilisateur();
    this.findAllMedicament();
    this.findAllFacture();
    this.findAllDossier();
    this.findAllOrdonnance();
    this.findAllRDV();
    this.findAllMessage();
  }

  findAllOrdonnance(){
    this.ordonnanceService.findAllOrdonnance().subscribe(data => {this.ordonnances = data;});
  }
  deleteOrdonnance(id:number){
    this.ordonnanceService.deleteOrdonnance(id).subscribe(()=>{this.findAllOrdonnance()});
  }
  saveOrdonnance(){
    this.ordonnanceService.saveOrdonnance(this.ordonnance).subscribe(()=>{
      this.findAllOrdonnance();
      this.ordonnance = new Ordonnance();
    })
  }

  findAllDossier(){
    this.dossierService.findAllDossier().subscribe(data => {this.dossiers = data;});
  }
  deleteDossier(id:number){
    this.dossierService.deleteDossier(id).subscribe(()=>{this.findAllDossier()});
  }
  saveDossier(){
    this.dossierService.saveDossier(this.dossier).subscribe(()=>{
      this.findAllDossier();
      this.dossier = new Dossier();
    })
  }
  
  findAllFacture(){
    this.factureService.findAllFacture().subscribe(data => {this.factures = data;});
  }
  deleteFacture(id:number){
    this.factureService.deleteFacture(id).subscribe(()=>{this.findAllFacture()});
  }
  saveFacture(){
    this.factureService.saveFacture(this.facture).subscribe(()=>{
      this.findAllFacture();
      this.facture = new Facture();
    })
  }
  
  findAllMedicament(){
    this.medicamentService.findAllMedicament().subscribe(data => {this.medicaments = data;});
  }
  deleteMedicament(id:number){
    this.medicamentService.deleteMedicament(id).subscribe(()=>{this.findAllMedicament()});
  }
  saveMedicament(){
    this.medicamentService.saveMedicament(this.medicament).subscribe(()=>{
      this.findAllMedicament();
      this.medicament = new Medicament();
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

  findAllChambre(){
    this.chambreService.findAllChambre().subscribe(data => {this.chambres = data;});
  }
  deleteChambre(id:number){
    this.chambreService.deleteChambre(id).subscribe(()=>{this.findAllChambre()});
  }
  saveChambre(){
    this.chambreService.saveChambre(this.chambre).subscribe(()=>{
      this.findAllChambre();
      this.chambre = new Chambre();
    })
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
}
