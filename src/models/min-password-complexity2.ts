import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The minimum level of complexity that all passwords used in this Partition must have. There are
 * four complexity 'factors' that can be evaluated. These are the presence of the following
 * character types in the password: lowercase characters, uppercase characters, integers, and
 * special characters. For instance, the password '123a' would get a complexity rating of '2', since
 * it contains integers and lowercase characters.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Needs to include one type.**
 * - `2` - **Needs to include two types.**
 * - `3` - **Needs to include three types.**
 * - `4` - **Needs to include four types.**
 *
 * </details>
 */
export const MinPasswordComplexity2 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type MinPasswordComplexity2 =
  | (typeof MinPasswordComplexity2)[keyof typeof MinPasswordComplexity2]
  | (number & {});

export const minPasswordComplexity2Schema: EnumSchema<MinPasswordComplexity2> =
  s.enumOf<MinPasswordComplexity2>(MinPasswordComplexity2);
