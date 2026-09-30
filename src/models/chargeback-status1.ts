import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Chargeback's status.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `open` - **Chargeback is open, responses may be submitted.**
 * - `closed` - **Chargeback is closed, responses may no longer be submitted.**
 * - `won` - **Chargeback won.**
 * - `lost` - **Chargeback lost.**
 *
 * </details>
 */
export const ChargebackStatus1 = {
  Open: "open",
  Closed: "closed",
  Won: "won",
  Lost: "lost",
} as const;
export type ChargebackStatus1 = (typeof ChargebackStatus1)[keyof typeof ChargebackStatus1] | (string & {});

export const chargebackStatus1Schema: EnumSchema<ChargebackStatus1> =
  s.enumOf<ChargebackStatus1>(ChargebackStatus1);
