import { AxiosInstance } from "axios";
import clientConfig from "./client";
import LoginEndpoint from "./controllers/login-endpoint";
import AuthController from "./controllers/auth-controller";

export class ThingsboardApiClient {
  private instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = clientConfig(baseURL);
  }

  public LoginEndpoint() {
    return new LoginEndpoint(this.instance);
  }

  public AuthController() {
    return new AuthController(this.instance);
  }
}
