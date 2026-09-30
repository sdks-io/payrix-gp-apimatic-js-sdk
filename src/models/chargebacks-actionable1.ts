import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the Chargeback is actionable and can be responded to.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not actionable**
 *
 * - `1` - **Actionable** </details>
 */
export const ChargebacksActionable1 = {
  _0: 0,
  _1: 1,
} as const;
export type ChargebacksActionable1 =
  | (typeof ChargebacksActionable1)[keyof typeof ChargebacksActionable1]
  | (number & {});

export const chargebacksActionable1Schema: EnumSchema<ChargebacksActionable1> =
  s.enumOf<ChargebacksActionable1>(ChargebacksActionable1);
