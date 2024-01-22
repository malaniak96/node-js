import { Document } from "mongoose";
export interface IUser extends Document {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
}
