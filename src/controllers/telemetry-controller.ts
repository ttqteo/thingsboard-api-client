import { AxiosInstance } from "axios";
import { TbEntity, TbScope } from "../interfaces/enums";

export default class TelemetryController {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async saveDevicesAttributes(
    token: string,
    path: {
      deviceId: string;
      scope: string;
    },
    payload: any
  ) {
    const url = `/api/plugins/telemetry/${path.deviceId}/${path.scope}`;
    return await this.instance.post<{}>(url, payload, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }

  public async saveEntityAttributesV1(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
      scope: string;
    },
    payload: any
  ) {
    const url = `/api/plugins/telemetry/${path.entityType}/${path.entityId}/${path.scope}`;
    return await this.instance.post<{}>(url, payload, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }

  public async saveEntityAttributesV2(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
      scope: string;
    },
    payload: any
  ) {
    const url = `/api/plugins/telemetry/${path.entityType}/${path.entityId}/attributes/${path.scope}`;
    return await this.instance.post<{}>(url, payload, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
    });
  }

  public async getAttributes(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
      scope: string;
    },
    query: {
      keys?: string;
    }
  ) {
    const url = `/api/plugins/telemetry/${path.entityType}/${path.entityId}/attributes`;
    return await this.instance.get<{}>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }

  public async getAttributesByScope(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
      scope: string;
    },
    query: {
      keys?: string;
    }
  ) {
    const url = `/api/plugins/telemetry/${path.entityType}/${path.entityId}/attributes/${path.scope}`;
    return await this.instance.get<{}>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }

  public async saveEntityTelemetry(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
    },
    body: any
  ) {
    const url = `/api/plugins/telemetry/${path.entityType}/${path.entityId}/timeseries/ANY`;
    return await this.instance.post<{}>(url, body, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: {
        scope: "ANY",
      },
    });
  }

  public async getTimeseries(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
    },
    query: {
      keys: string;
      startTs: number;
      endTs: number;
      interval?: number;
      limit?: number;
      agg?: string;
      orderBy?: string;
      useStrictDataTypes?: boolean;
    }
  ) {
    const url = `/api/plugins/telemetry/${path.entityType}/${path.entityId}/values/timeseries`;
    return await this.instance.get<{}>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }

  public async getLatestTimeseries(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
    },
    query: {
      keys?: string;
      useStrictDataTypes?: boolean;
    }
  ) {
    const url = `/api/plugins/telemetry/${path.entityType}/${path.entityId}/values/timeseries`;
    return await this.instance.get<{}>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }
}
