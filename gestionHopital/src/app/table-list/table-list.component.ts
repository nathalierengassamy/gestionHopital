  import { Component, OnInit } from '@angular/core';
  import { TypeRDV } from 'app/model/type-rdv';
  import { TypeRDVService } from 'app/services/type-rdv.service';
  import { RDV } from 'app/model/rdv';
  import { RDVService } from 'app/services/rdv.service';
  import { Utilisateur } from 'app/model/utilisateur';
  import { UtilisateurService } from 'app/services/utilisateur.service';
  import { Role } from 'app/model/role';
  import { RoleService } from 'app/services/role.service';
  
  @Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
  })
  export class TableListComponent implements OnInit {
    typerdvs!: any[];
    typerdv:TypeRDV=new TypeRDV();
    utilisateurs!: any[];
    utilisateur:Utilisateur=new Utilisateur();
    rdvs!: any[];
    rdv:RDV=new RDV();
    roles!: any[];
    role:Role=new Role();
  
    constructor(private roleService:RoleService, private utilisateurService:UtilisateurService, private rdvService:RDVService) { }
  
    ngOnInit(): void {
      this.findAllUtilisateur();
      this.findAllRDV();
      this.findAllRole();
    }
      
    findAllUtilisateur(){
      this.utilisateurService.findAllUtilisateur().subscribe(data => {this.utilisateurs = data;});
    }
    findAllRDV(){
      this.rdvService.findAllRDV().subscribe(data => {this.rdvs = data;});
    }
    findAllRole(){
      this.roleService.findAllRole().subscribe(data => {this.role = data;});
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
  }