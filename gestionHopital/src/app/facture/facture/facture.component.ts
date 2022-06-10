import { Component, OnInit } from '@angular/core';
import { Facture } from 'app/model/facture';
import { FactureService } from 'app/services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  factures!: any[];
  facture:Facture=new Facture();
  
  constructor(private factureService:FactureService) { }

  ngOnInit(): void {
    this.findAllFacture();
  }

  findAllFacture(){
    this.factureService.findAllFacture().subscribe(data => {this.facture = data;});
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
}
