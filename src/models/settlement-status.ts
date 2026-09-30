import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SettlementStatus = {
  Cancelled: "cancelled",
  Failed: "failed",
  Pending: "pending",
  Processed: "processed",
  Processing: "processing",
} as const;
export type SettlementStatus = (typeof SettlementStatus)[keyof typeof SettlementStatus] | (string & {});

export const settlementStatusSchema: EnumSchema<SettlementStatus> =
  s.enumOf<SettlementStatus>(SettlementStatus);
