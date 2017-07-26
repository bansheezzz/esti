import { Disease } from './disease';
export class Investigation {
    id: number;
    disease: Disease;
    classification: string;
    collectionDate: Date;
    status: string;
}
