import express from 'express';
import * as BlogController from '../controllers/BlogController';
import * as PermissionMiddleware from '../PermissionMiddleware';

const router = express.Router();

router.get('/blogs', BlogController.getAllBlogs);
router.get('/blogs/:id', BlogController.getBlogById);

router.post('/blogs', PermissionMiddleware.checkPermission, BlogController.createBlog);

router.put('/blogs/:id', PermissionMiddleware.checkPermission, BlogController.updateBlog);

router.delete('/blogs/:id', PermissionMiddleware.checkPermission, BlogController.deleteBlog);

export default router;
