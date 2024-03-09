import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { encrypt } from "../helpers/encrypt";
import { UserResponce } from "../dto/user.dto"; // Import UserDto from the correct path
import * as cache from "memory-cache";

export class UserController {
  static async signup(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const encryptedPassword = await encrypt.encryptpass(password);
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = encryptedPassword;

    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);
    // Use the UserResponse DTO to structure the data being sent in the response
    const userDataSent = new UserResponce();
    userDataSent.name = user.name;
    userDataSent.email = user.email;

    const token = encrypt.generateToken({ id: user.id });

    return res
      .status(200)
      .json({ message: "User created successfully", token, userDataSent });
  }
}
