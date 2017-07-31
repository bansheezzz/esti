import { Router } from '@angular/router';
import { Investigation } from 'app/types/investigation';
import { element } from 'protractor';
import { Gender } from 'app/types/gender';
import { PatientService } from 'app/services/patient.service';
import { InvestigationService } from 'app/services/investigation.service';
import { Patient } from 'app/types/patient';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SelectionEvent, GridComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('patientGrid') patientGrid: GridComponent;
  @ViewChild('investigationGrid') investigationGrid: GridComponent;

  private patients: Patient[];
  private genders: Gender[];
  private currentRouteTarget: string;
  private isViewable = false;

  constructor(private patientService: PatientService,
    private investigationService: InvestigationService,
    private router: Router) { }

  ngOnInit() {
    this.patientService.getPatients()
      .subscribe((patients) => this.patients = patients);

    this.patientService.getGenders()
      .subscribe((genders) => this.genders = genders);
  }

  selectInvestigationRow(event: SelectionEvent, patient: Patient) {
    if (event.selected) {
      this.patientService.setPatientContext(patient);
      this.investigationService.setInvestigationContext(this.investigationGrid.data[event.index]);
      this.currentRouteTarget = 'diseasetreatment';
      this.isViewable = true;
      return;
    }
    this.isViewable = false;
  }

  viewRecord() {
    this.router.navigate([ this.currentRouteTarget ])
  }

  private clearSelection(grid: GridComponent) {
    if (!grid) {
      return;
    }

    const selectedRow = grid.wrapper.nativeElement.querySelector('.k-state-selected');

    if (!selectedRow) {
      return;
    }

    selectedRow.classList.remove('k-state-selected');
  }
}
