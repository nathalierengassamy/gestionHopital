import { Component, OnInit } from '@angular/core';
import { Ordonnance } from 'app/model/ordonnance';
import { OrdonnanceService } from 'app/services/ordonnance.service';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent implements OnInit {
  ordonnances!: any[];
  ordonnance:Ordonnance=new Ordonnance();

  constructor(private ordonnanceService:OrdonnanceService) { }

  ngOnInit(): void {
    this.findAllOrdonnance();
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
}