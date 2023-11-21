import { AxiosInstance } from "axios";

interface LoginReq {
  username: string;
  password: string;
}

interface LoginRes {
  token: string;
  refreshToken: string;
  expiredIn: number;
}

export default class LoginEndpoint {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async login(body: LoginReq) {
    try {
      const url = `/api/auth/login`;
      return await this.instance.post<LoginRes>(url, body);
    } catch (error) {
      console.error(error);
    }
  }
}
