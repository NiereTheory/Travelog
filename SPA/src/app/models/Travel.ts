import { Country } from './Country';
import { User } from './User';

export interface Travel {
    id: number;
    travelDate: Date;
    travelCity: string;
    rating: number;
    comments: string;
    country: Country;
    user: User;
}
