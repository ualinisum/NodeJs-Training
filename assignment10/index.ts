import express, {Request, Response, NextFunction} from 'express';
require('dotenv').config();
import user from './route/users';

const app = express();
app.use(express.json());

app.use('/api/user', user);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

app.listen(3000, () => {
  console.log('Server is running at 3000');
})