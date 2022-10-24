//import { MongodbUsersRepository } from "../../repos/implementations/MongodbUsersRepository";
import { ListdbUsersRepository } from "../../repos/implementations/ListdbUsersRepository";
import { CreateUser } from './CreateUser';
import { CreateUserController } from "./CreateUserController";

//const mongodbUsersRepository = new MongodbUsersRepository();
const listdbUsersRepository = new ListdbUsersRepository();

//const createUser = new CreateUser(mongodbUsersRepository);
const createUser = new CreateUser(listdbUsersRepository);


const createUserController = new CreateUserController(createUser);

export {createUser, createUserController} ;
