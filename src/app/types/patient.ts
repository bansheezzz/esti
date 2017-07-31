import { Gender } from 'app/types/gender';
import { Investigation } from './investigation';
export class Patient {
    clientID: number;
    phn: number;
    lastName: string;
    firstName: string;
    gender: Gender;
    genderIdentity: string;
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
    healthRegion: string;
    investigations: Investigation[];
}
