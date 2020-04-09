import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser({  
        email: 'Email', 
        password: 'senha',
        techs: ['NodeJS', 'React', 'React-native', { title: 'JavaScript', experience: 100 }] 
    });

    return res.json({ message: 'Hello World!'});
}