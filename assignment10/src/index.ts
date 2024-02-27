import express from 'express';
import mongoConnection from './config/db';
import userRouter from './routes/user';
import blogRouter from './routes/blog';
import morgan from "morgan";
import customMorganMiddleware from './middlewares/logger';


const app = express();
const port = 5000;



app.use(express.json());
app.use(morgan('dev'));
app.use(customMorganMiddleware());
app.use("/api", userRouter);
app.use("/api", blogRouter);


mongoConnection((result) => {
    app.listen(port, () => {
        console.log(`${result} Server Start`);
    });
});

