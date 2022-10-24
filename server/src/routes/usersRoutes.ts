import { Router } from 'express';
import { Request, Response } from 'express';
import { createUserController } from '../use-cases/createUser';
const usersRouter = Router();


usersRouter.post('/createUser', (request: Request, response: Response)=>{
    return createUserController.handle(request, response);
});

export {usersRouter};