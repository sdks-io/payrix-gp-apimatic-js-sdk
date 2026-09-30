import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the chargeback message was imported.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not imported.**
 * - `1` - **Imported.**
 *
 * </details>
 */
export const ChargebackMessageImported1 = {
  _0: 0,
  _1: 1,
} as const;
export type ChargebackMessageImported1 =
  | (typeof ChargebackMessageImported1)[keyof typeof ChargebackMessageImported1]
  | (number & {});

export const chargebackMessageImported1Schema: EnumSchema<ChargebackMessageImported1> =
  s.enumOf<ChargebackMessageImported1>(ChargebackMessageImported1);
