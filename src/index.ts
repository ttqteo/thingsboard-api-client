import axios, { AxiosInstance } from "axios";
import config from "./config";

interface LoginEndpointBody {
  username: string;
  password: string;
}

interface LoginEndpointResponse {
  token: string;
  refreshToken: string;
  expiredIn: number;
}
export default class ThingsboardApiClient {
  private instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL: baseURL || config.baseURL,
    });
  }

  public async loginEndpoint(body: LoginEndpointBody) {
    try {
      const url = `/api/auth/login`;
      return await this.instance.post<LoginEndpointResponse>(url, body);
    } catch (error) {
      console.error(error);
    }
  }
}
