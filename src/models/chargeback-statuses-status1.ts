import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Chargeback's status. <details><summary>Valid Values</summary>
 *
 *  - `open` - **Chargeback is open, responses may be submitted.**
 *
 *  - `closed` - **Chargeback is closed, responses may no longer be submitted.**
 *
 *  - `won` - **Chargeback won.**
 *  - `lost` - **Chargeback lost.**
 *
 * </details>
 */
export const ChargebackStatusesStatus1 = {
  Open: "open",
  Closed: "closed",
  Won: "won",
  Lost: "lost",
} as const;
export type ChargebackStatusesStatus1 =
  | (typeof ChargebackStatusesStatus1)[keyof typeof ChargebackStatusesStatus1]
  | (string & {});

export const chargebackStatusesStatus1Schema: EnumSchema<ChargebackStatusesStatus1> =
  s.enumOf<ChargebackStatusesStatus1>(ChargebackStatusesStatus1);
