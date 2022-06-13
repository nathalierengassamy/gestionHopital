import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PatientComponent } from '../../user-profile/patient/patient.component';
import { MedecinComponent } from '../../user-profile/medecin/medecin.component';
import { AdministrateurComponent } from '../../user-profile/administrateur/administrateur.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
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
import { UtilisateurService } from 'app/services/utilisateur.service';
import { RoleService } from 'app/services/role.service';
import { ChambreService } from 'app/services/chambre.service';
import { AdministrateurService } from 'app/services/administrateur.service';
import { DossierService } from 'app/services/dossier.service';
import { MedicamentService } from 'app/services/medicament.service';
import { FactureService } from 'app/services/facture.service';
import { OrdonnanceService } from 'app/services/ordonnance.service';
import { MessageService } from 'app/services/message.service';
import { RDVService } from 'app/services/rdv.service';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
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
    Title],
})

export class AdminLayoutModule {}
