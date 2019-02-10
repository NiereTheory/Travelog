import { Travel } from './Travel';

export interface User {
    id: number;
    username: string;
    lastLogin: Date;
    created: Date;
    travels: Travel[];
    email?: string;
    password?: string;

}
