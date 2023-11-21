import { AxiosInstance } from "axios";
import HttpException from "../models/http-exception";

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
    const url = `/api/auth/login`;
    return await this.instance.post<LoginRes>(url, body);
  }
}
