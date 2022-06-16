import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ContactComponent } from './contact/contact/contact.component';
import { AppService } from './app.service';
import { UtilisateurService } from './services/utilisateur.service';
import { RoleService } from './services/role.service';
import { Observable } from 'rxjs';
import { TypeRDVComponent } from './type-rdv/type-rdv.component';
import { TypeRDVService } from './services/type-rdv.service';
import { ChambreService } from './services/chambre.service';
import { DossierService } from './services/dossier.service';
import { FactureService } from './services/facture.service';
import { MedicamentService } from './services/medicament.service';
import { MessageService } from './services/message.service';
import { OrdonnanceService } from './services/ordonnance.service';
import { RDVService } from './services/rdv.service';
//import { LoginComponent } from './login/login.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 const xhr=req.clone({
  headers: req.headers.set('X-Requested-With','XMLHttpRequest')
 });   
    return next.handle(xhr);
  }
  
}


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
    TypeRDVComponent,
  ],
  providers: [
    AppService,
    UtilisateurService,
    RoleService,
    TypeRDVService,
    ChambreService,
    DossierService,
    FactureService,
    MedicamentService,
    MessageService,
    OrdonnanceService,
    RDVService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
