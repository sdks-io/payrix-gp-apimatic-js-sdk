import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatementStatus = {
  Pending: "pending",
  Processing: "processing",
  PartiallyPaid: "partiallyPaid",
  Paid: "paid",
  PartiallyCancelled: "partiallyCancelled",
  Cancelled: "cancelled",
} as const;
export type StatementStatus = (typeof StatementStatus)[keyof typeof StatementStatus] | (string & {});

export const statementStatusSchema: EnumSchema<StatementStatus> = s.enumOf<StatementStatus>(StatementStatus);
