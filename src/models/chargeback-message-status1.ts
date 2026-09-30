import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the Chargeback.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `requested` - **The chargeback has been requested.**
 * - `processing` - **The chargeback is currently being processed.**
 * - `failed` - **The chargeback process has failed.**
 * - `denied` - **The chargeback has been denied.**
 * - `processed` - **The chargeback has been successfully processed.**
 *
 * </details>
 */
export const ChargebackMessageStatus1 = {
  Requested: "requested",
  Processing: "processing",
  Failed: "failed",
  Denied: "denied",
  Processed: "processed",
} as const;
export type ChargebackMessageStatus1 =
  | (typeof ChargebackMessageStatus1)[keyof typeof ChargebackMessageStatus1]
  | (string & {});

export const chargebackMessageStatus1Schema: EnumSchema<ChargebackMessageStatus1> =
  s.enumOf<ChargebackMessageStatus1>(ChargebackMessageStatus1);
