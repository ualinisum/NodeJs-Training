import express from 'express';
import bodyParser from 'body-parser';
import blogRoutes from './routes/blogRoutes';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/api', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
