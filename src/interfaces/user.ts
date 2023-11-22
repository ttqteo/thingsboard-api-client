import { EAuthoritym, IEntity } from "./common";

export interface IUser {
  id?: IEntity;
  createdTime?: number;
  tenantId?: IEntity;
  customerId?: IEntity;
  email: string;
  name: string;
  authority: EAuthoritym;
  firstName?: string;
  lastname?: string;
  phone?: string;
  additionalInfo?: any;
  ownerId?: IEntity;
}
