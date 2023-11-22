import { AxiosInstance } from "axios";

export default class LoginEndpoint {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async login(body: { username: string; password: string }) {
    const url = `/api/auth/login`;
    return await this.instance.post<{
      token: string;
      refreshToken: string;
    }>(url, body);
  }
}
