import { TbEntity } from "./enums";

export interface IAlarm {
  id: TbEntity;
  createdTime: number;
  tenantId: TbEntity;
  customerId: TbEntity;
  name: string;
  type: string;
  originator: TbEntity;
  severity: ["CRITICAL", "INDETERMINATE", "MAJOR", "MINOR", "WARNING"];
  acknowledged: boolean;
  cleared: boolean;
  assigneeId: TbEntity;
  startTs: number;
  endTs: number;
  ackTs: number;
  clearTs: number;
  assignTs: number;
  details: any;
  propagateToOwnerHierarchy: boolean;
  propagate: boolean;
  propagateToTenant: boolean;
  propagateRelationTypes: any;
  propagateToOwner: boolean;
  originatorName: string;
  originatorLabel: string;
  assignee: {
    email: string;
    firstName: string;
    id: TbEntity;
    lastName: string;
  };
  status: string;
}
