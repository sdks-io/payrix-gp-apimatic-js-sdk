import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRefStage = {
  AmexCharge: "amexCharge",
  Batch: "batch",
  BatchSuffix: "batchSuffix",
  Boarding: "boarding",
  Chain: "chain",
  Chargeback: "chargeback",
  CompanyDebit: "companyDebit",
  CompanyCredit: "companyCredit",
  Create: "create",
  Disbursement: "disbursement",
  Entity: "entity",
  BatchFile: "batchFile",
  PayoutFile: "payoutFile",
  Frontend: "frontend",
  Funding: "funding",
  Member: "member",
  Merchant: "merchant",
  Mid: "mid",
  OrigId: "origId",
  Store: "store",
  Software: "software",
  Terminal: "terminal",
  DisplayName: "displayName",
  Domain: "domain",
  ExpressCreds: "expressCreds",
} as const;
export type EntityRefStage = (typeof EntityRefStage)[keyof typeof EntityRefStage] | (string & {});

export const entityRefStageSchema: EnumSchema<EntityRefStage> = s.enumOf<EntityRefStage>(EntityRefStage);
