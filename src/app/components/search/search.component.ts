import { Router } from '@angular/router';
import { Investigation } from './../../types/investigation';
import { element } from 'protractor';
import { Gender } from './../../types/gender';
import { PatientService } from './../../services/patient.service';
import { Patient } from './../../types/patient';
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
  private currentID: number;
  private currentRouteTarget: string;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.patients = this.patientService.getPatients();
    this.genders = this.patientService.getGenders();
  }

  selectPatientRow(event: SelectionEvent) {
    if (event.selected) {
      if (this.investigationGrid) {
        this.clearSelection(this.investigationGrid);
      }
      this.currentID = this.patientGrid.data[event.index].clientID;
      this.currentRouteTarget = 'personalinfo';
      return;
    }
    this.currentID = null;
  }

  selectInvestigationRow(event: SelectionEvent) {
    if (event.selected) {
      if (this.patientGrid) {
        this.clearSelection(this.patientGrid);
      }
      this.currentID = this.investigationGrid.data[event.index].id;
      this.currentRouteTarget = 'diseasetreatment';
      return;
    }
    this.currentID = null;
  }

  viewRecord() {
    this.router.navigate([ this.currentRouteTarget, this.currentID ])
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
