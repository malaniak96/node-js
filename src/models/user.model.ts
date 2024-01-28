import { model, Schema } from "mongoose";

import { ERole } from "../enums/role.enum";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 55,
      required: true,
    },
    password: {
      type: String,
      required: true,
      // select: false
    },
    role: {
      type: String,
      enum: ERole,
      default: ERole.USER,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("user", userSchema);
