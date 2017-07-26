import { Investigation } from './investigation';
export class Patient {
    clientID: number;
    phn: number;
    lastName: string;
    firstName: string;
    gender: string;
    dob: Date;
    phone: number;
    email: string;
    unit: string;
    streetNumber: number;
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
    address: string;
    investigations: Investigation[];
}
