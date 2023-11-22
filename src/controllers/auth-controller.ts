import { AxiosInstance } from "axios";
import { IUser } from "../interfaces/user";

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
    const url = `/api/auth/user`;
    return await this.instance.get<IUser>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }

  public async changePassword(token: string, body: changePasswordProps) {
    const url = `/api/auth/changePassword`;
    return await this.instance.post<string>(url, body, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }
}
