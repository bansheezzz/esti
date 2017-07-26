import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { DiseaseInformationTreatmentComponent  } from './components/disease-information-treatment/disease-information-treatment.component';
import { StiInformationComponent } from './components/sti-information/sti-information.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const router: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'personalinfo', component: PersonalInformationComponent },
    { path: 'diseasetreatment', component: DiseaseInformationTreatmentComponent },
    { path: 'stiinfo', component: StiInformationComponent },
    { path: 'contact', component: ContactsComponent },
    { path: 'personalinfo/:id', component: PersonalInformationComponent },
    { path: 'diseasetreatment/:id', component: DiseaseInformationTreatmentComponent },
    { path: 'stiinfo/:id', component: StiInformationComponent },
    { path: 'contact/:id', component: ContactsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
