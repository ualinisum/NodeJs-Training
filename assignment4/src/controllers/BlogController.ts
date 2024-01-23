import { Request, Response } from 'express';
import Blog from '../classes/Blog';

const blogs: Blog[] = [];

export const getAllBlogs = (req: Request, res: Response) => {
  res.json(blogs);
};

export const getBlogById = (req: Request, res: Response) => {
  const blogId = parseInt(req.params.id, 10);
  const blog = blogs.find((b) => b.getId === blogId);

  if (blog) {
    res.json({
      id: blog.getId,
      title: blog.getTitle,
      content: blog.getContent,
      username: blog.getUsername,
      views: blog.getViews,
    });
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
};

export const createBlog = (req: Request, res: Response) => {
  const { title, content, username } = req.body;
  const newBlog = new Blog(blogs.length + 1, title, content, username, 0);
  blogs.push(newBlog);

  res.status(201).json({
    id: newBlog.getId,
    title: newBlog.getTitle,
    content: newBlog.getContent,
    username: newBlog.getUsername,
    views: newBlog.getViews,
  });
};

export const updateBlog = (req: Request, res: Response) => {
  const blogId = parseInt(req.params.id, 10);
  const { title, content, username } = req.body;
  const blog = blogs.find((b) => b.getId === blogId);

  if (blog) {
    blog.setTitle = title;
    blog.setContent = content;
    blog.setUsername = username;
    res.json({
      id: blog.getId,
      title: blog.getTitle,
      content: blog.getContent,
      username: blog.getUsername,
      views: blog.getViews,
    });
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
};

export const deleteBlog = (req: Request, res: Response) => {
  const blogId = parseInt(req.params.id, 10);
  const blogIndex = blogs.findIndex((b) => b.getId === blogId);

  if (blogIndex !== -1) {
    const deletedBlog = blogs.splice(blogIndex, 1);
    res.json({ message: 'Blog deleted successfully' });
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
};
