import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Email notification to the business email when an existing bank account record is updated.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const BankAccountUpdateStopEmail2 = {
  _0: 0,
  _1: 1,
} as const;
export type BankAccountUpdateStopEmail2 =
  | (typeof BankAccountUpdateStopEmail2)[keyof typeof BankAccountUpdateStopEmail2]
  | (number & {});

export const bankAccountUpdateStopEmail2Schema: EnumSchema<BankAccountUpdateStopEmail2> =
  s.enumOf<BankAccountUpdateStopEmail2>(BankAccountUpdateStopEmail2);
