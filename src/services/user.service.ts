import { ApiError } from "../errors/api.error";
import { ITokenPayload } from "../interfaces/token.interface";
import { IUser } from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }

  public async getById(id: string): Promise<IUser> {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new ApiError("User not found", 422);
    }
    return user;
  }

  public async getMe(jwtPayload: ITokenPayload): Promise<IUser> {
    const user = await userRepository.getById(jwtPayload.userId);
    if (!user) {
      throw new ApiError("You cannot get this user", 403);
    }
    return user;
  }

  public async updateMe(
    jwtPayload: ITokenPayload,
    body: Partial<IUser>,
  ): Promise<IUser> {
    const user = await userRepository.getById(jwtPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 403);
    }
    return await userRepository.updateById(jwtPayload.userId, body);
  }

  public async deleteMe(jwtPayload: ITokenPayload): Promise<void> {
    const user = await userRepository.getById(jwtPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 403);
    }
    await Promise.all([
      userRepository.deleteById(jwtPayload.userId),
      tokenRepository.deleteManyByUserId(jwtPayload.userId),
    ]);
  }
}
export const userService = new UserService();
