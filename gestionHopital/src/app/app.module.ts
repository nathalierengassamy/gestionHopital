import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance/ordonnance.component';
import { RDVComponent } from './RDV/rdv/rdv.component';
import { MessageComponent } from './message/message/message.component';
import { MedicamentComponent } from './medicament/medicament/medicament.component';
import { FactureComponent } from './facture/facture/facture.component';
import { DossierComponent } from './dossier/dossier/dossier.component';
import { ChambreComponent } from './chambre/chambre/chambre.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RoleComponent } from './role/role.component';
import { UtilisateurService } from './services/utilisateur.service';
import { RoleService } from './services/role.service';
import { ChambreService } from './services/chambre.service';
import { AdministrateurService } from './services/administrateur.service';
import { DossierService } from './services/dossier.service';
import { FactureService } from './services/facture.service';
import { MedicamentService } from './services/medicament.service';
import { MessageService } from './services/message.service';
import { OrdonnanceService } from './services/ordonnance.service';
import { RDVService } from './services/rdv.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import PerfectScrollbar from 'perfect-scrollbar';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    OrdonnanceComponent,
    RDVComponent,
    MessageComponent,
    MedicamentComponent,
    FactureComponent,
    DossierComponent,
    ChambreComponent,
    UtilisateurComponent,
    RoleComponent,

  ],
  providers: [
    UtilisateurService,
    RoleService,
    ChambreService,
    AdministrateurService,
    DossierService,
    FactureService,
    MedicamentService,
    MessageService,
    OrdonnanceService,
    RDVService,
    {
      provide: LocationStrategy,
      useClass : HashLocationStrategy,
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
