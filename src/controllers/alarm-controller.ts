import { AxiosInstance } from "axios";
import { IUser } from "../interfaces/user";
import { TbEntity } from "../interfaces/enums";
import { PageData } from "../models/page-data";
import { IAlarm } from "../interfaces/alamrs";

interface changePasswordProps {
  currentPassword: string;
  newPassword: string;
}

export default class AlarmController {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public async getAlarms(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
    },
    query: {
      searchStatus?: string;
      status?: string;
      assigneeId?: string;
      page: number;
      pageSize: number;
      textSearch?: string;
      sortProperty?: string;
      sortOrder?: string;
      startTime?: number;
      endTime?: number;
      fetchOriginator?: boolean;
    }
  ) {
    const url = `/api/alarm/${path.entityType}/${path.entityId}`;
    return await this.instance.get<PageData<IAlarm>>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }

  public async getAlarmsV2(
    token: string,
    path: {
      entityType: TbEntity;
      entityId: string;
    },
    query: {
      statusList?: string;
      severityList?: string;
      typeList?: string;
      assigneeId?: string;
      page: number;
      pageSize: number;
      sortProperty?: string;
      sortOrder?: string;
      startTime?: number;
      endTime?: number;
    }
  ) {
    const url = `/api/v2/alarm/${path.entityType}/${path.entityId}`;
    return await this.instance.get<PageData<IAlarm>>(url, {
      headers: {
        "X-Authorization": `Bearer ${token}`,
      },
      params: query,
    });
  }

  public async ackAlarm(
    token: string,
    path: {
      alarmId: string;
    }
  ) {
    const url = `/api/alarm/${path.alarmId}/ack`;
    return await this.instance.post<IAlarm>(
      url,
      {},
      {
        headers: {
          "X-Authorization": `Bearer ${token}`,
        },
      }
    );
  }

  public async clearAlarm(
    token: string,
    path: {
      alarmId: string;
    }
  ) {
    const url = `/api/alarm/${path.alarmId}/clear`;
    return await this.instance.post<IAlarm>(
      url,
      {},
      {
        headers: {
          "X-Authorization": `Bearer ${token}`,
        },
      }
    );
  }
}
