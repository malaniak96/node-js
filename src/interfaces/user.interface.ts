import { Document } from "mongoose";

import { ERole } from "../enums/role.enum";
export interface IUser extends Document {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
  isVerified: boolean;
  role: ERole;
  createdAt: Date;
}
