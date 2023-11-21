import { AxiosInstance } from "axios";
import { IUser } from "../interfaces/user";
import HttpException from "../models/http-exception";

interface changePasswordProps {
  currentPassword: string;
  newPassword: string;
}

export default class AuthController {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async getUser(token: string) {
    try {
      const url = `/api/auth/user`;
      return await this.instance.get<IUser>(url, {
        headers: {
          "X-Authorization": token,
        },
      });
    } catch (error) {
      return new HttpException(`Error:: ${error}`);
    }
  }

  public async changePassword(token: string, body: changePasswordProps) {
    try {
      const url = `/api/auth/changePassword`;
      return await this.instance.post<string>(url, body, {
        headers: {
          "X-Authorization": token,
        },
      });
    } catch (error) {
      return new HttpException(`Error:: ${error}`);
    }
  }
}
