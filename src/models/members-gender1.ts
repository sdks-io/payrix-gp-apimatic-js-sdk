import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The gender of this Member.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `male` - **Male**
 *
 * - `female` - **Female**
 *
 * </details>
 */
export const MembersGender1 = {
  Male: "male",
  Female: "female",
} as const;
export type MembersGender1 = (typeof MembersGender1)[keyof typeof MembersGender1] | (string & {});

export const membersGender1Schema: EnumSchema<MembersGender1> = s.enumOf<MembersGender1>(MembersGender1);
