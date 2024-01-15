import * as fs from "fs/promises";
import * as path from "path";

import { IUser } from "./interfaces/user.interface";
//todo Lesson Resolve- IUser Interface

const pathToFile = path.join(process.cwd(), "db.json");
export const read = async (): Promise<IUser[]> => {
  const json = await fs.readFile(pathToFile, { encoding: "utf-8" });
  return JSON.parse(json);
};
export const write = async (users: IUser[]): Promise<void> => {
  await fs.writeFile(pathToFile, JSON.stringify(users));
};
