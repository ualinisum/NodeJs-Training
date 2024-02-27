import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";

interface AuthRequest extends Request {
    userId?: string;
    roles?: string[];
}

const authGuard = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const JwtPayload: any = jwt.verify(token, "secret_key");
        req.userId = JwtPayload.userId;
        req.roles = JwtPayload.roles;
        next();
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            return res.status(401).send({ message: "Token expired" });
        }
        return res.status(401).send({ message: "Unauthorized" });
    }
};



const roleGuard = (roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        const userRoleFromJwt = req.roles;
        const haveRoles = roles?.filter(role => userRoleFromJwt?.includes(role));

        if (haveRoles.length === 0) {
            return res.status(403).send({ name: "Forbidden", message: "You have'nt permission for this route" });
        }
        next();
    };
};

export { authGuard, roleGuard };