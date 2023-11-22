import { AxiosInstance } from "axios";
import { EEntity } from "../interfaces/common";

export default class TelemetryController {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async saveDevicesAttributes(
    token: string,
    path: {
      deviceId: string;
      scope: ["SERVER_SCOPE", "SHARED_SCOPE", "CLIENT_SCOPE"];
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
      entityType: EEntity;
      entityId: string;
      scope: ["SERVER_SCOPE", "SHARED_SCOPE", "CLIENT_SCOPE"];
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
      entityType: EEntity;
      entityId: string;
      scope: ["SERVER_SCOPE", "SHARED_SCOPE", "CLIENT_SCOPE"];
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
      entityType: EEntity;
      entityId: string;
      scope: ["SERVER_SCOPE", "SHARED_SCOPE", "CLIENT_SCOPE"];
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
      entityType: EEntity;
      entityId: string;
      scope: ["SERVER_SCOPE", "SHARED_SCOPE", "CLIENT_SCOPE"];
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

  public async getTimeseries(
    token: string,
    path: {
      entityType: EEntity;
      entityId: string;
    },
    query: {
      keys: string;
      startTs: number;
      endTs: number;
      interval?: number;
      limit?: number;
      agg?: ["AVG", "COUNT", "MAX", "MIN", "NONE", "SUM"];
      orderBy?: ["ASC", "DESC"];
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
      entityType: EEntity;
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
