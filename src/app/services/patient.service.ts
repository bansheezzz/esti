import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { apiRoot } from './../app.global.constants';
import { Gender } from './../types/gender';
import { Patient } from './../types/patient';

@Injectable()
export class PatientService {
  private currentPatient = new BehaviorSubject<Patient>(null);

  constructor(private http: HttpClient) { }

  public getPatients() {
    return this.http.get(apiRoot + '/patients')
      .map((res) => res as Patient[]);
  }

  public getGenders() {
    return this.http.get(apiRoot + '/genders')
      .map((res) => res as Gender[]);
  }

  public setPatientContext(patient: Patient) {
    this.currentPatient.next(patient);
  }

  public getPatientContext(): Observable<Patient> {
    return this.currentPatient.asObservable();
  }
}
