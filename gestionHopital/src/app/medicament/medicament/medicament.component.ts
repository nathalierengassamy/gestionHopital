import { Component, OnInit } from '@angular/core';
import { Medicament } from 'app/model/medicament';
import { MedicamentService } from 'app/services/medicament.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {
  medicaments!: any[];
  medicament:Medicament=new Medicament();
  
  constructor(private medicamentService:MedicamentService) { }

  ngOnInit(): void {
    this.findAllMedicament();
  }

  findAllMedicament(){
    this.medicamentService.findAllMedicament().subscribe(data => {this.medicament = data;});
  }
  deleteMedicament(id:number){
    this.medicamentService.deleteMedicament(id).subscribe(()=>{this.findAllMedicament()});
  }
  saveMedicament(){
    this.medicamentService.saveMedicament(this.medicament).subscribe(()=>{
      this.findAllMedicament();
      this.medicament = new Medicament();
    })
  }
}
