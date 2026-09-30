import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the Account.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `8` - **Checking**
 * - `9` - **Savings**
 * - `10` - **Corporate Checking**
 * - `11` - **Corporate Savings**
 *
 * </details>
 */
export const AccountMethod2 = {
  _8: 8,
  _9: 9,
  _10: 10,
  _11: 11,
} as const;
export type AccountMethod2 = (typeof AccountMethod2)[keyof typeof AccountMethod2] | (number & {});

export const accountMethod2Schema: EnumSchema<AccountMethod2> = s.enumOf<AccountMethod2>(AccountMethod2);
