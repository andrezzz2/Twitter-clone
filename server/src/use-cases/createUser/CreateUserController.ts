import { Request, Response } from 'express';
import { CreateUser} from './CreateUser';

//receive a request, calls the use-case, then send back a response
export class CreateUserController{

    constructor (private createUser: CreateUser){}

    async handle(request: Request, response: Response): Promise<Response>{
        
        const {firstName, lastName, username, email, password} = request.body;

        try{
            await this.createUser.execute({firstName, lastName, username, email, password});
            return response.status(201).send({message: "User created."});
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        } 

    } 

}