import express from 'express';
import bodyParser from 'body-parser';
import * as BlogController from './controllers/BlogController';
import * as PermissionMiddleware from './PermissionMiddleware';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.get('/blogs', BlogController.getAllBlogs);
app.get('/blogs/:id', BlogController.getBlogById);

app.post('/blogs', PermissionMiddleware.checkPermission, BlogController.createBlog);

app.put('/blogs/:id', PermissionMiddleware.checkPermission, BlogController.updateBlog);

app.delete('/blogs/:id', PermissionMiddleware.checkPermission, BlogController.deleteBlog);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
