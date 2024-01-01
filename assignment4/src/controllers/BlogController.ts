import { Request, Response } from 'express';
import Blog from '../classes/Blog';

const blogs: Blog[] = [];

export const getAllBlogs = (req: Request, res: Response) => {
  const blogData = blogs.map((blog) => ({
    id: blog.getId,
    title: blog.getTitle,
    content: blog.getContent,
    username: blog.getUsername,
    views: blog.getViews,
  }));

  res.json(blogData);
};

export const getBlogById = (req: Request, res: Response) => {
  const blogId = parseInt(req.params.id, 10);
  const blog = blogs.find((b) => b.getId === blogId);

  if (blog) {
    const blogData = {
      id: blog.getId,
      title: blog.getTitle,
      content: blog.getContent,
      username: blog.getUsername,
      views: blog.getViews,
    };

    res.json(blogData);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
};

export const createBlog = (req: Request, res: Response) => {
  const { title, content, username } = req.body;
  const newBlog = new Blog(blogs.length + 1, title, content, username, 0);
  blogs.push(newBlog);

  const blogData = {
    id: newBlog.getId,
    title: newBlog.getTitle,
    content: newBlog.getContent,
    username: newBlog.getUsername,
    views: newBlog.getViews,
  };

  res.status(201).json(blogData);
};

export const updateBlog = (req: Request, res: Response) => {
  const blogId = parseInt(req.params.id, 10);
  const { title, content, username } = req.body;
  const blog = blogs.find((b) => b.getId === blogId);

  if (blog) {
    blog.setTitle = title;
    blog.setContent = content;
    blog.setUsername = username;

    const updatedBlogData = {
      id: blog.getId,
      title: blog.getTitle,
      content: blog.getContent,
      username: blog.getUsername,
      views: blog.getViews,
    };

    res.json(updatedBlogData);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
};

export const deleteBlog = (req: Request, res: Response) => {
  const blogId = parseInt(req.params.id, 10);
  const blogIndex = blogs.findIndex((b) => b.getId === blogId);

  if (blogIndex !== -1) {
    const deletedBlog = blogs.splice(blogIndex, 1);

    const deletedBlogData = {
      id: deletedBlog[0].getId,
      title: deletedBlog[0].getTitle,
      content: deletedBlog[0].getContent,
      username: deletedBlog[0].getUsername,
      views: deletedBlog[0].getViews,
    };

    res.json(deletedBlogData);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
};
