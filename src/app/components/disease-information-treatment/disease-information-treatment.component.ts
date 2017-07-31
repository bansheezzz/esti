import { NullPipe } from './../../pipes/null.pipe';
import { PhonePipe } from './../../pipes/phone.pipe';
import { Investigation } from 'app/types/investigation';
import { InvestigationService } from 'app/services/investigation.service';
import { PatientService } from 'app/services/patient.service';
import { Patient } from 'app/types/patient';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-disease-information-treatment',
  templateUrl: './disease-information-treatment.component.html',
  styleUrls: ['./disease-information-treatment.component.scss']
})
export class DiseaseInformationTreatmentComponent implements OnInit, OnDestroy {
  private patientSubscription: Subscription;
  private investigationSubscription: Subscription;
  private patient: Patient;
  private investigation: Investigation;

  constructor(private patientService: PatientService,
    private investigationService: InvestigationService,
    private router: Router) { }

  ngOnInit(): void {
    this.patientSubscription =
      this.patientService.getPatientContext()
        .subscribe((patient) => {
          if (!patient) {
            this.router.navigate([ 'search' ]);
          }
          this.patient = patient;
        });

    this.investigationSubscription =
      this.investigationService.getInvestigationContext()
        .subscribe((investigation) => {
          if (!investigation) {
            this.router.navigate([ 'search' ]);
          }
          this.investigation = investigation;
        });

  }

  ngOnDestroy(): void {
    this.patientSubscription.unsubscribe();
    this.investigationSubscription.unsubscribe();
  }
}
