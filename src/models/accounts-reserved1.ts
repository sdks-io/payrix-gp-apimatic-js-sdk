import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Account is reserved and the action that will be taken as a result.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No reserve.**
 * - `1` - **Block transaction, will never be processed. The Entity is sent to the manual review
 *   queue..**
 * - `3` - **Hold transaction, will not be captured.**
 * - `4` - **Reserve transaction, funds should be reserved.**
 * - `5` - **Block current activity, no change for merchant.**
 * - `6` - **Passed decision(s). Will not be set anywhere, will only be used for integration
 *   purposes.**
 * - `7` - **We did not have policies to process.**
 * - `8` - **We onboard the merchant and wait for manual check later.**
 * - `9` - **Schedule the automatic release of the reserve.**
 * - `10` - **Hold transaction, will not be captured. Automatic release when the associated sale is
 *   done.**
 *
 * </details>
 */
export const AccountsReserved1 = {
  _0: 0,
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
} as const;
export type AccountsReserved1 = (typeof AccountsReserved1)[keyof typeof AccountsReserved1] | (number & {});

export const accountsReserved1Schema: EnumSchema<AccountsReserved1> =
  s.enumOf<AccountsReserved1>(AccountsReserved1);
