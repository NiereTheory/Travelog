import { Country } from './Country';

export interface Travel {
    id: number;
    travelDate: Date;
    travelCity: string;
    rating: number;
    comments: string;
    country: Country;

}
