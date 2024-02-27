import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    roles: { type: [String], default: ["user"], },
    isActive: {
        type: Boolean,
        default: true
    },
    ceratedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = model("User", UserSchema);
export default User;