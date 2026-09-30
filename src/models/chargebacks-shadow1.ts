import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not shadowed.**
 *
 * - `1` - **Shadowed.** </details>
 */
export const ChargebacksShadow1 = {
  _0: 0,
  _1: 1,
} as const;
export type ChargebacksShadow1 = (typeof ChargebacksShadow1)[keyof typeof ChargebacksShadow1] | (number & {});

export const chargebacksShadow1Schema: EnumSchema<ChargebacksShadow1> =
  s.enumOf<ChargebacksShadow1>(ChargebacksShadow1);
