import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether sameDay funding is enabled or disabled for this disbursement.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled.**
 *
 * - `1` - **Enabled.**
 *
 * </details>
 */
export const DisbursementsSameDay1 = {
  _0: 0,
  _1: 1,
} as const;
export type DisbursementsSameDay1 =
  | (typeof DisbursementsSameDay1)[keyof typeof DisbursementsSameDay1]
  | (number & {});

export const disbursementsSameDay1Schema: EnumSchema<DisbursementsSameDay1> =
  s.enumOf<DisbursementsSameDay1>(DisbursementsSameDay1);
