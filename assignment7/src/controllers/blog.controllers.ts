import { Request, Response } from "express";
import Blog from "../models/Blog";
import {
  aggregationQuery,
  blogUpdateValidation,
  blogValidationSchema,
  paramIdValidationSchema,
} from "../validations/blog";

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    if (Object.keys(query).length) {
      await aggregationQuery.validateAsync(query);

      getBlogByQuery(query)
        .then((data) => res.status(200).json({ data }))
        .catch((error: any) => res.status(400).json({ message: error }));
    } else {
      const data = await Blog.find();

      res.status(200).json({ data });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const getBlogByQuery = async (queries: any) => {
  const { mostRecent, mostPopular, mostInteraction } = queries;

  if (mostRecent) {
    const data = await Blog.aggregate([
      {
        $sort: {
          creationDate: -1,
        },
      },
    ]);

    return data;
  } else if (mostPopular) {
    const data = await Blog.aggregate([
      {
        $sort: {
          "userRating.views": -1,
        },
      },
    ]);

    return data;
  } else if (mostInteraction) {
    const data = await Blog.aggregate([
      {
        $sort: {
          "meta.likes": -1,
        },
      },
    ]);

    return data;
  } else {
    throw new Error("Please provide valid query");
  }
};

const postBlog = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    await blogValidationSchema.validateAsync(body);

    const result = await Blog.create(body);

    res
      .status(201)
      .json({ message: "Blog Created Successfully", data: result });
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const { error } = paramIdValidationSchema.validate({ id });
    if (error) {
      return res.status(400).json({ message: "Invalid Id format" });
    }

    await blogUpdateValidation.validateAsync(body);

    const updatedBlog = await Blog.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    return res.status(200).json({
      message: "Blog Updated Successfully",
      data: updatedBlog,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { error } = paramIdValidationSchema.validate({ id });
    if (error) {
      return res.status(400).json({ message: "Invalid Id format" });
    }

    const result = await Blog.deleteOne({ _id: id });

    if (result.deletedCount === 1) {
      return res.status(200).json({ message: "Post deleted successfully." });
    } else {
      return res.status(404).json({ message: "Post not found" });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export { getAllBlogs, postBlog, updateBlog, deleteBlog };
