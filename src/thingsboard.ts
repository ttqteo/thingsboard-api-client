import { AxiosInstance } from "axios";
import clientConfig from "./client";
import LoginEndpoint from "./controllers/login-endpoint";
import AuthController from "./controllers/auth-controller";
import UserController from "./controllers/user-controller";
import TelemetryController from "./controllers/telemetry-controller";
import DeviceController from "./controllers/device-controller";

export class ThingsboardApiClient {
  private instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = clientConfig(baseURL);
  }

  public loginEndpoint() {
    return new LoginEndpoint(this.instance);
  }

  public auth() {
    return new AuthController(this.instance);
  }

  public user() {
    return new UserController(this.instance);
  }

  public telemetry() {
    return new TelemetryController(this.instance);
  }

  public device() {
    return new DeviceController(this.instance);
  }
}
