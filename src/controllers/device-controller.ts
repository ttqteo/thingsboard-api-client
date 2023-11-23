import { AxiosInstance } from "axios";
import { PageData } from "../models/page-data";
import { IDevice, IDeviceInfo } from "../interfaces/device";

export default class DeviceController {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async getCustomerDeviceInfos(
    token: string,
    path: { customerId: string },
    query: {
      pageSize: number;
      page: number;
      includeCustomers?: string;
      deviceProfileId: string;
      active?: boolean;
      textSearch?: string;
      sortProperty?: [
        "createdTime",
        "customerTitle",
        "deviceProfileName",
        "label",
        "name"
      ];
      sortOrder?: ["ASC", "DESC"];
    }
  ) {
    const url = `/api/customer/${path.customerId}/deviceInfos`;
    return await this.instance.get<PageData<IDeviceInfo>>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }

  public async getDeviceInfoById(token: string, path: { deviceId: string }) {
    const url = `/api/device/info/${path.deviceId}`;
    return await this.instance.get<IDeviceInfo>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }

  public async saveDevice(
    token: string,
    query: {
      accessToken: StructuredSerializeOptions;
      entityGroupId: string;
      entityGroupIds: string;
    },
    body: IDevice
  ) {
    const url = `/api/device`;
    return await this.instance.post<IDevice>(url, body, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }

  public async getDeviceCedentialsByDeviceId(
    token: string,
    path: { deviceId: string }
  ) {
    const url = `/api/device/${path.deviceId}`;
    return await this.instance.get<PageData<IDeviceInfo>>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }
}
