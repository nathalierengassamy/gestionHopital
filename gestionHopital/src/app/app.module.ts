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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    OrdonnanceComponent,
    RDVComponent,
    MessageComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
