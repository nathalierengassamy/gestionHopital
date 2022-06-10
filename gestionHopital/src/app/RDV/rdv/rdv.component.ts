import { Component, OnInit } from '@angular/core';
import { RDV } from 'app/model/rdv';
import { RDVService } from 'app/services/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RDVComponent implements OnInit {
  rdvs!: any[];
  rdv:RDV=new RDV();
  
  constructor(private rdvService:RDVService) { }

  ngOnInit(): void {
    this.findAllRDV();
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
}
