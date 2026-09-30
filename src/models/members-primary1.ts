import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Member is the 'primary' contact for the associated Merchant. Only one
 * Member associated with each Merchant can be the 'primary' Member.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Primary contact.**
 *
 * - `1` - **Primary contact.**
 *
 * </details>
 */
export const MembersPrimary1 = {
  _0: 0,
  _1: 1,
} as const;
export type MembersPrimary1 = (typeof MembersPrimary1)[keyof typeof MembersPrimary1] | (number & {});

export const membersPrimary1Schema: EnumSchema<MembersPrimary1> = s.enumOf<MembersPrimary1>(MembersPrimary1);
