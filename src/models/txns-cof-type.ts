import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsCofType = {
  Single: "single",
  Scheduled: "scheduled",
  Unscheduled: "unscheduled",
  Installment: "installment",
} as const;
export type TxnsCofType = (typeof TxnsCofType)[keyof typeof TxnsCofType] | (string & {});

export const txnsCofTypeSchema: EnumSchema<TxnsCofType> = s.enumOf<TxnsCofType>(TxnsCofType);
