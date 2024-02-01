import Joi from "joi";

const blogValidationSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  isActive: Joi.boolean(),
  userRating: {
    favs: Joi.number(),
    likes: Joi.number(),
    views: Joi.number(),
  },
});

const blogUpdateValidation = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  author: Joi.string(),
  tags: Joi.array().items(Joi.string()),
});

const paramIdValidationSchema = Joi.object({
  id: Joi.string().length(24).hex(),
});

const aggregationQuery = Joi.object({
  mostRecent: Joi.boolean(),
  mostPopular: Joi.boolean(),
  mostInteraction: Joi.boolean(),
});

export {
  blogValidationSchema,
  paramIdValidationSchema,
  blogUpdateValidation,
  aggregationQuery,
};
