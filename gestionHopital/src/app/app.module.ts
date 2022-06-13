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
import { BrowserModule } from '@angular/platform-browser';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RoleComponent } from './role/role.component';
import { InfospratiquesComponent } from './infospratiques/infospratiques.component';

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
    InfospratiquesComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
