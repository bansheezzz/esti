import { InvestigationService } from './services/investigation.service';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './services/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs'
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { DiseaseInformationTreatmentComponent } from './components/disease-information-treatment/disease-information-treatment.component';
import { StiInformationComponent } from './components/sti-information/sti-information.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { routes } from './app.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { PhonePipe } from './pipes/phone.pipe';
import { NullPipe } from './pipes/null.pipe';
import { PhysicianComponent } from './components/physician/physician.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PersonalInformationComponent,
    DiseaseInformationTreatmentComponent,
    StiInformationComponent,
    ContactsComponent,
    NavigationComponent,
    HeaderComponent,
    PhonePipe,
    NullPipe,
    PhysicianComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,
    InputsModule,
    DateInputsModule,
    routes
  ],
  providers: [
    PatientService,
    InvestigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
