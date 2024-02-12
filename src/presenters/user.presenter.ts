import { configs } from "../configs/config";
import { IUser } from "../interfaces/user.interface";

export class UserPresenter {
  public static userToResponse(user: IUser) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      isVerified: user.isVerified,
      role: user.role,
      createdAt: user.createdAt,
      phone: user.phone,
      avatar: user?.avatar ? `${configs.AWS_S3_URL}${user?.avatar}` : null,
    };
  }
}
