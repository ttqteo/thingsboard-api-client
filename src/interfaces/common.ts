export interface IEntity {
  id: string;
  entityType: EEntity;
}

export enum EAuthoritym {
  CUSTOMER_USER = "CUSTOMER_USER",
  TENANT_ADMIN = "TENANT_ADMIN",
  SYS_ADMIN = "SYS_ADMIN",
}

export enum EEntity {
  TENANT = "TENANT",
  CUSTOMER = "CUSTOMER",
  USER = "USER",
  DEVICE = "DEVICE",
  ASSET = "ASSET",
}
