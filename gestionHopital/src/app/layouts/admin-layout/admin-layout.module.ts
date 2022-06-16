import { Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PatientComponent } from '../../user-profile/patient/patient.component';
import { MedecinComponent } from '../../user-profile/medecin/medecin.component';
import { AdministrateurComponent } from '../../user-profile/administrateur/administrateur.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/infospratiques/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MentionsComponent } from 'app/mentions/mentions/mentions.component';
import { ContactComponent } from 'app/contact/contact/contact.component';
import { AppService } from 'app/app.service';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { RoleService } from 'app/services/role.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLayoutComponent } from './admin-layout.component';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    MedecinComponent,
    AdministrateurComponent,
    PatientComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    MentionsComponent,
    ContactComponent,
  ],
  providers: [
    AppService,
    UtilisateurService,
    RoleService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}
  ],
  bootstrap: [AdminLayoutComponent]
})

export class AdminLayoutModule {}
