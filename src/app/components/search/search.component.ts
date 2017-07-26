import { Gender } from './../../types/gender';
import { PatientService } from './../../services/patient.service';
import { Patient } from './../../types/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private patients: Patient[];
  private genders: Gender[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patients = this.patientService.getPatients();
    this.genders = this.patientService.getGenders();
  }

}
