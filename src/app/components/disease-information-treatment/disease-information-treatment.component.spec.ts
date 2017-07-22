import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseInformationTreatmentComponent } from './disease-information-treatment.component';

describe('DiseaseInformationTreatmentComponent', () => {
  let component: DiseaseInformationTreatmentComponent;
  let fixture: ComponentFixture<DiseaseInformationTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseInformationTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseInformationTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
