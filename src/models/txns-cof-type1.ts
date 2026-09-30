import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of Card On File transaction when using a token is single, scheduled, or unscheduled.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `single` - **Individual Transaction.**
 * - `scheduled` - **Scheduled Transaction.**
 * - `unscheduled` - **Unscheduled sequential Transaction.**
 * - `installment` - **Installment Transaction.** </details>
 */
export const TxnsCofType1 = {
  Single: "single",
  Scheduled: "scheduled",
  Unscheduled: "unscheduled",
  Installment: "installment",
} as const;
export type TxnsCofType1 = (typeof TxnsCofType1)[keyof typeof TxnsCofType1] | (string & {});

export const txnsCofType1Schema: EnumSchema<TxnsCofType1> = s.enumOf<TxnsCofType1>(TxnsCofType1);
