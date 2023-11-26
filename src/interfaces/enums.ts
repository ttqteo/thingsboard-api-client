enum TbAuthority {
  CUSTOMER_USER = "CUSTOMER_USER",
  TENANT_ADMIN = "TENANT_ADMIN",
  SYS_ADMIN = "SYS_ADMIN",
}

enum TbEntity {
  TENANT = "TENANT",
  CUSTOMER = "CUSTOMER",
  USER = "USER",
  DEVICE = "DEVICE",
  ASSET = "ASSET",
}

enum TbScope {
  SERVER_SCOPE = "SERVER_SCOPE",
  CLIENT_SCOPE = "CLIENT_SCOPE",
  SHARED_SCOPE = "SHARED_SCOPE",
}

export { TbAuthority, TbEntity, TbScope };
