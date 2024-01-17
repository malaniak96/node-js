import { Document } from "mongoose";
export interface IUser extends Document {
  id: number;
  userName: string;
  email: string;
  age: number;
  password: string;
}
