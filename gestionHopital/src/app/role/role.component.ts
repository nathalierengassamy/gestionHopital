import { Component, OnInit } from '@angular/core';
import { Role } from 'app/model/role';
import { RoleService } from 'app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles!: any[];
  role:Role=new Role();

  constructor(private ordonnanceService:RoleService) { }

  ngOnInit(): void {
    this.findAllRole();
  }
  findAllRole(){
    this.ordonnanceService.findAllRole().subscribe(data => {this.role = data;});
  }
  deleteOrdonnance(id:number){
    this.ordonnanceService.deleteRole(id).subscribe(()=>{this.findAllRole()});
  }
  saveOrdonnance(){
    this.ordonnanceService.saveRole(this.role).subscribe(()=>{
      this.findAllRole();
      this.role = new Role();
    })
  }
}
