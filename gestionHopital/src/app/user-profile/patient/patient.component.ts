import { Component, OnInit } from '@angular/core';
import { Chambre } from 'app/chambre';
import { Dossier } from 'app/model/dossier';
import { Facture } from 'app/model/facture';
import { Medicament } from 'app/model/medicament';
import { Ordonnance } from 'app/model/ordonnance';
import { Role } from 'app/model/role';
import { Utilisateur } from 'app/model/utilisateur';
import { ChambreService } from 'app/services/chambre.service';
import { DossierService } from 'app/services/dossier.service';
import { FactureService } from 'app/services/facture.service';
import { MedicamentService } from 'app/services/medicament.service';
import { OrdonnanceService } from 'app/services/ordonnance.service';
import { RoleService } from 'app/services/role.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  chambres!: any[];
  chambre:Chambre=new Chambre();
  utilisateurs!: any[];
  utilisateur:Utilisateur=new Utilisateur();
  medicaments!: any[];
  medicament:Medicament=new Medicament();
  factures!: any[];
  facture:Facture=new Facture();
  dossiers!: any[];
  dossier:Dossier=new Dossier();
  roles!: any[];
  role:Role=new Role();
  ordonnances!: any[];
  ordonnance:Ordonnance=new Ordonnance();
  constructor(private chambreService:ChambreService, private utilisateurService:UtilisateurService, private medicamentService:MedicamentService, private factureService:FactureService,
    private dossierService:DossierService, private roleService:RoleService, private ordonnanceService:OrdonnanceService) { }

  ngOnInit() {
    this.findByDossier();
  }
  findByDossier() {
    this.factureService.findByDossier().subscribe(data => {this.factures = data;});
    }

}
