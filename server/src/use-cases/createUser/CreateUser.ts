import { User } from "../../entities/User";
import { IUsersRepository } from "../../repos/IUsersRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

//contains the business logic
export class CreateUser{
    //dependency inversion principle, depende apenas da interface e não da implementação dela
    constructor (private usersRepository: IUsersRepository){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByUsername(data.username);

        if(userAlreadyExists)
            throw new Error('User already exists!');

        const user = new User(data);

        await this.usersRepository.createUser(user);
    }
}