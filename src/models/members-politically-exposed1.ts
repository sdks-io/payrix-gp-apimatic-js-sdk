import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This person is politically exposed, defined as: "persons whom through their prominent position or
 * influence, is more susceptible to being involved in bribery or corruption."
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not politically exposed.**
 *
 * - `1` - **Politically exposed.**
 *
 * </details>
 */
export const MembersPoliticallyExposed1 = {
  _0: 0,
  _1: 1,
} as const;
export type MembersPoliticallyExposed1 =
  | (typeof MembersPoliticallyExposed1)[keyof typeof MembersPoliticallyExposed1]
  | (number & {});

export const membersPoliticallyExposed1Schema: EnumSchema<MembersPoliticallyExposed1> =
  s.enumOf<MembersPoliticallyExposed1>(MembersPoliticallyExposed1);
