import { AxiosInstance } from "axios";
import { IUser } from "../interfaces/user";

export default class UserController {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async saveUser(token: string, payload: IUser) {
    const url = `/api/user`;
    return await this.instance.post<IUser>(url, payload, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }
}
