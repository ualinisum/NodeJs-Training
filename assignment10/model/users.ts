import { Schema, Model } from 'mongoose';
import validator from 'validator';

const schema = new Schema({
  user: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'Email is required.'],
    validate: [validator.isEmail, 'Please provide a valid email!']
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, 'Password is required.'],
    select: false,
  }
});

export const user = Model.create('Users', schema);