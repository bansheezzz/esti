import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StiInformationComponent } from './sti-information.component';

describe('StiInformationComponent', () => {
  let component: StiInformationComponent;
  let fixture: ComponentFixture<StiInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StiInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StiInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
