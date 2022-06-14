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
<<<<<<< HEAD
import { ContactComponent } from './contact/contact/contact.component';
import { AppService } from './app.service';
import { UtilisateurService } from './services/utilisateur.service';
import { RoleService } from './services/role.service';
import { Observable } from 'rxjs';

@Injectable()
export class XhrInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 const xhr=req.clone({
  headers: req.headers.set('X-Requested-With','XMLHttpRequest')
 });   
    return next.handle(xhr);
  }
  
}
=======
>>>>>>> 53f80f6e3930106c06868db7adcc339e873b2d30

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
    AppService,
    UtilisateurService,
    RoleService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
