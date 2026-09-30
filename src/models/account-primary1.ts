import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Account is the primary Account for the associated Entity. Only one Account
 * associated with each Entity can be the primary Account.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not primary**
 * - `1` - **Primary**
 *
 * </details>
 */
export const AccountPrimary1 = {
  _0: 0,
  _1: 1,
} as const;
export type AccountPrimary1 = (typeof AccountPrimary1)[keyof typeof AccountPrimary1] | (number & {});

export const accountPrimary1Schema: EnumSchema<AccountPrimary1> = s.enumOf<AccountPrimary1>(AccountPrimary1);
