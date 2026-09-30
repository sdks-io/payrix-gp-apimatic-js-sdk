import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the Account.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Ready.**
 * - `1` - **Ready.**
 * - `2` - **Challenged.**
 * - `3` - **Verified.**
 * - `4` - **Manual.**
 *
 * </details>
 */
export const AccountStatus1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type AccountStatus1 = (typeof AccountStatus1)[keyof typeof AccountStatus1] | (number & {});

export const accountStatus1Schema: EnumSchema<AccountStatus1> = s.enumOf<AccountStatus1>(AccountStatus1);
