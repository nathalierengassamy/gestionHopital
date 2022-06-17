import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Router } from '@angular/router';
import { RoleService } from 'app/services/role.service';
import { Role } from 'app/model/role';
import { Utilisateur } from 'app/model/utilisateur';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  credentials = {username:'',password:''};
  constructor( /*private utilisateur:Utilisateur, private role:Role,*/ private appService:AppService,private httpClient:HttpClient,
    private router:Router) { }

  ngOnInit():void {
  }
  profile(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/user-profile/administrateur")});
    return false;
  }

  /*profile2(){
    this.appService.authenticate,this.credentials,()=>{
      if (this.role.libelle == 'administrateur'){
        this.router.navigateByUrl("/user-profile/administrateur")
      }
      else 
        if (this.role.libelle == 'patient') {
          this.router.navigateByUrl("/user-profile/patient")
        }
        else
          this.router.navigateByUrl("/user-profile/medecin")
      }
      return false;
    }
}*/
}
