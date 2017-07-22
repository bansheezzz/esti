import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { MdMenuModule, MdButtonModule, MdInputModule,
//          MdDatepickerModule, MdNativeDateModule, MdSelectModule
// } from '@angular/material';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { DiseaseInformationTreatmentComponent } from './components/disease-information-treatment/disease-information-treatment.component';
import { StiInformationComponent } from './components/sti-information/sti-information.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { routes } from './app.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PersonalInformationComponent,
    DiseaseInformationTreatmentComponent,
    StiInformationComponent,
    ContactsComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // MdMenuModule,
    // MdInputModule,
    // MdButtonModule,
    // MdSelectModule,
    // MdDatepickerModule,
    // MdNativeDateModule,
    routes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
