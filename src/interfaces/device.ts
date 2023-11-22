import { IEntity } from "./common";

export interface IDeviceGroup {
  id: IEntity;
  name: string;
}

export interface IDevice {
  id?: IEntity;
  createdTime?: number;
  tenantId?: IEntity;
  customerId?: IEntity;
  ownerId: IEntity;
  name: string;
  type?: string;
  label?: string;
  deviceProfileId: IEntity;
  deviceData?: {
    configuration: any;
    transportConfiguration: any;
  };
  firmwareId?: IEntity;
  softwareId?: IEntity;
  additionalInfo?: any;
}

export interface IDeviceInfo extends IDevice {
  ownerName?: string;
  groups?: IDeviceGroup[];
  active?: boolean;
}
