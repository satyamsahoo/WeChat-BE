import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import config from "../config/config";

export interface CustomRequest extends Request {
    token: JwtPayload
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers['authorization'];
    let jwtPayload;

    try {
        jwtPayload = verify(token?.split(' ')[1], config.jwt.jwtSecret, {
            complete: true,
            audience: config.jwt.jwtAudience,
            issuer: config.jwt.jwtIssuer,
            algorithms: ['HS256'],
            clockTolerance: 0,
            ignoreExpiration: false,
            ignoreNotBefore: false
        });
        (req as CustomRequest).token = jwtPayload
    } catch (error) {
        res.status(401)
            .type('json')
            .send(JSON.stringify({ message: 'Missing or invalid token' }));
        return;
    }

    next();
}