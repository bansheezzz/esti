import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.scss']
})
export class PhysicianComponent implements OnInit {
  private isOtherPhysician = false;

  constructor() { }

  ngOnInit() {
  }

  protected orgSelect(value: string) {
    if (value === 'other') {
      this.isOtherPhysician = true;
      return;
    }
    this.isOtherPhysician = false;
  }
}
