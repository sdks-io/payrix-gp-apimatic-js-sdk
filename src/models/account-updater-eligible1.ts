import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether this resource is eligible to be sent for updates to wordpay as part of the
 * account updater process.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Eligible**
 * - `0` - **Not Eligible**
 *
 * </details>
 */
export const AccountUpdaterEligible1 = {
  _1: 1,
  _0: 0,
} as const;
export type AccountUpdaterEligible1 =
  | (typeof AccountUpdaterEligible1)[keyof typeof AccountUpdaterEligible1]
  | (number & {});

export const accountUpdaterEligible1Schema: EnumSchema<AccountUpdaterEligible1> =
  s.enumOf<AccountUpdaterEligible1>(AccountUpdaterEligible1);
