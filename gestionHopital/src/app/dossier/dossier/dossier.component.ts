import { Component, OnInit } from '@angular/core';
import { Dossier } from 'app/model/dossier';
import { DossierService } from 'app/services/dossier.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  dossiers!: any[];
  dossier:Dossier=new Dossier();
  
  constructor(private dossierService:DossierService) { }

  ngOnInit(): void {
    this.findAllDossier();
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
}
