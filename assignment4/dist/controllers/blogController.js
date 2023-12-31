"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getBlogById = exports.getAllBlogs = void 0;
const Blog_1 = __importDefault(require("../classes/Blog"));
const blogs = [];
const getAllBlogs = (req, res) => {
    const blogData = blogs.map((blog) => ({
        id: blog.getId,
        title: blog.getTitle,
        content: blog.getContent,
        username: blog.getUsername,
        views: blog.getViews,
    }));
    res.json(blogData);
};
exports.getAllBlogs = getAllBlogs;
const getBlogById = (req, res) => {
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
    }
    else {
        res.status(404).json({ error: 'Blog not found' });
    }
};
exports.getBlogById = getBlogById;
const createBlog = (req, res) => {
    const { title, content, username } = req.body;
    const newBlog = new Blog_1.default(blogs.length + 1, title, content, username, 0);
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
exports.createBlog = createBlog;
const updateBlog = (req, res) => {
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
    }
    else {
        res.status(404).json({ error: 'Blog not found' });
    }
};
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => {
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
    }
    else {
        res.status(404).json({ error: 'Blog not found' });
    }
};
exports.deleteBlog = deleteBlog;
