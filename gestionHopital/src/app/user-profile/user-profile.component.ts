import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  credentials = {username:'',password:''};
  constructor(private appService:AppService,private httpClient:HttpClient,
    private router:Router) { }

  ngOnInit():void {
  }
  profile(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/user-profile/administrateur")});
    return false;
  }

}
