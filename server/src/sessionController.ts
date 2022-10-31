import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

class SessionController {

    private userSessions : object

    constructor () {
        this.userSessions = {}
    }

    verifyJWT(req : Request, res: Response, next: NextFunction){
        const accessToken = req.headers['x-access-token'];

        if (!accessToken){
            return res.send({auth: false, authMessage: 'No token provided.'});
        }


    }

}