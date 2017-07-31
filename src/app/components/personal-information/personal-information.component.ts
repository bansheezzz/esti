import { PatientService } from 'app/services/patient.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Patient } from 'app/types/patient';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private patient: Patient;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.subscription = this.patientService.getPatientContext()
      .subscribe((patient) => {
        this.patient = patient;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
