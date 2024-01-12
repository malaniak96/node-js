import fs from "fs/promises";
import path from "path";

interface IUser {
  id: number;
  age: number;
  name: string;
  email: string;
}

const pathToFile = path.join(process.cwd(), "db.json");

export const read = async (): Promise<IUser[]> => {
  const json = await fs.readFile(pathToFile, { encoding: "utf-8" });
  return JSON.parse(json);
};

export const write = async (users) => {
  await fs.writeFile(pathToFile, JSON.stringify(users));
};

module.exports = { read, write };
