import { Gender } from './../types/gender';
import { Patient } from './../types/patient';
import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {
  private patients: Patient[] = [
    {
      clientID: 516484,
      phn: 1234567890,
      lastName: 'Doe',
      firstName: 'John',
      gender: 'M',
      dob: new Date(),
      phone: 6041234567,
      email: 'JonnyDoe@email.com',
      unit: '15',
      streetNumber: 123,
      streetName: 'Main Street',
      city: 'Vancouver',
      postalCode: 'V5V4V9',
      country: 'Canada',
      address: '123 Main Street, Vancouver',
      investigations: [
        {
          id: 7879,
          disease: {
            id: 4343,
            name: 'Chlamydia'
          },
          classification: 'Case - Confirmed',
          collectionDate: new Date(),
          status: 'Open'
        }
      ]
    },
    {
      clientID: 961587,
      phn: 9876543219,
      lastName: 'Doe',
      firstName: 'Jane',
      gender: 'F',
      dob: new Date(),
      phone: 6041234267,
      email: 'JaneDoe@email.com',
      unit: null,
      streetNumber: 5423,
      streetName: 'Sunny Street',
      city: 'Vancouver',
      postalCode: 'V6V6V6',
      country: 'Canada',
      address: '5423 Sunny Street, Vancouver',
      investigations: [
        {
          id: 3213,
          disease: {
            id: 4343,
            name: 'Chlamydia'
          },
          classification: 'Case - Person under Investigation',
          collectionDate: new Date(),
          status: 'Closed'
        }
      ]
    }
  ];

  private genders: Gender[] = [
    {
      id: 1,
      code: 'M',
      description: 'Male'
    },
    {
      id: 2,
      code: 'F',
      description: 'Female'
    },
    {
      id: 3,
      code: 'U',
      description: 'Unspecified'
    },
    {
      id: 4,
      code: 'O',
      description: 'Other'
    }
  ]

  constructor() { }

  public getPatients() {
    return this.patients as Patient[];
  }

  public getGenders() {
    return this.genders as Gender[];
  }
}
