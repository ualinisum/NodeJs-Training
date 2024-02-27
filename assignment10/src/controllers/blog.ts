import { Response, Request } from "express";

const getAllBlogsController = (req: Request, res: Response) => {
    return res.send("Blogs Getted Successfully");
};

export { getAllBlogsController };