import {User} from '../entities/User';

type publicInfo = Pick <User, 'firstName' | 'lastName' | 'username' | 'bio'>

export interface IUsersRepository{

    findByUsername(username: string) : Promise <User | undefined>;
    createUser(user: User) : Promise <void>;
    getPublicInfo(username: string ) : Promise <publicInfo | undefined>;

}