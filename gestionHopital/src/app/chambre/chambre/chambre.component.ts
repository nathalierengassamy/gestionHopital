import { Component, OnInit } from '@angular/core';
import { Chambre } from 'app/model/chambre';
import { ChambreService } from 'app/services/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  chambres!: any[];
  chambre:Chambre=new Chambre();
  
  constructor(private chambreService:ChambreService) { }

  ngOnInit(): void {
    this.findAllChambre();
  }

  findAllChambre(){
    this.chambreService.findAllChambre().subscribe(data => {this.chambre = data;});
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
}
