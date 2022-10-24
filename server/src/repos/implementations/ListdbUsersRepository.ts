import { User } from "src/entities/User";
import { IUsersRepository } from "../IUsersRepository";

type publicInfo = Pick <User, 'firstName' | 'lastName' | 'username' | 'bio'>

export class ListdbUsersRepository implements IUsersRepository{

    private users: User[] = []


    async findByUsername(username: string) : Promise <User | undefined> {
        const user = this.users.find(user=> user.username === username);
        return user;
    }

    async createUser(user: User) : Promise <void> {
        this.users.push(user);
        console.log(this.users);
    };

    async getPublicInfo(username: string ) : Promise <publicInfo | undefined> {
        const publicInfo = this.users.find(user=> user.username === username);
        return publicInfo;
    }

}