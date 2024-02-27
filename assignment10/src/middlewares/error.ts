import { NextFunction, Request, Response } from "express";

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = err.status || 500;
    let message = err.message || 'Internal Server Error';

    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
    } else if (err.name === 'UnauthorizedError') {
        statusCode = 401;
        message = 'Unauthorized';
    }

    console.error(err.stack);

    res.status(statusCode).json({ error: message });
};

export default errorMiddleware;
