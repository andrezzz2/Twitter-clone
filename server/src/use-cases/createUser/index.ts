//import { MongodbUsersRepository } from "../../repos/implementations/MongodbUsersRepository";
import { PostgresUsersRepository } from "../../repos/implementations/PostgresUsersRepository";
import { CreateUser } from './CreateUser';
import { CreateUserController } from "./CreateUserController";

const postgresUsersRepository = new PostgresUsersRepository();
const createUser = new CreateUser(postgresUsersRepository);
const createUserController = new CreateUserController(createUser);

export {createUserController};
