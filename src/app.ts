import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./configs/config";
import { ApiError } from "./errors/api.error";
import { adminRouter } from "./routers/admin.router";
import { authRouter } from "./routers/auth.router";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/users", userRouter);

app.use(
  "*",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status).json({
      message: err.message,
      status: err.status,
    });
  },
);

const PORT = configs.PORT;

app.listen(PORT, async () => {
  console.log(configs.DB_URL);
  await mongoose.connect(configs.DB_URL);
  console.log(`Server has started on PORT ${PORT}`);
});
