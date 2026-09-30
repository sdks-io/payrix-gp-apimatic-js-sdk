import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the settlement.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `cancelled` - **Cancelled.**
 * - `failed` - **Failed.**
 * - `pending` - **Pending.**
 * - `processed` - **Processed.**
 * - `processing` - **Processing.**
 *
 * </details>
 */
export const SettlementStatus1 = {
  Cancelled: "cancelled",
  Failed: "failed",
  Pending: "pending",
  Processed: "processed",
  Processing: "processing",
} as const;
export type SettlementStatus1 = (typeof SettlementStatus1)[keyof typeof SettlementStatus1] | (string & {});

export const settlementStatus1Schema: EnumSchema<SettlementStatus1> =
  s.enumOf<SettlementStatus1>(SettlementStatus1);
