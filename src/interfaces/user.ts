import { IEntity } from "./common";
import { TbAuthority } from "./enums";

export interface IUser {
  id?: IEntity;
  createdTime?: number;
  tenantId?: IEntity;
  customerId?: IEntity;
  email: string;
  name: string;
  authority: TbAuthority;
  firstName?: string;
  lastname?: string;
  phone?: string;
  additionalInfo?: any;
  ownerId?: IEntity;
}
