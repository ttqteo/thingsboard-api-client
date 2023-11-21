import axios from "axios";
import * as https from "https";
import config from "./config";

export default function clientConfig(baseURL?: string) {
  const instance = axios.create({
    baseURL: baseURL || config.defaultBaseURL,
    headers: {
      "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return instance;
}
