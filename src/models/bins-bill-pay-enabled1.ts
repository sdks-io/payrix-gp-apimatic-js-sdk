import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this card may be used for bill pay features.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Bill pay capability disabled.**
 * - `1` - **Bill pay capability enabled.**
 *
 * </details>
 */
export const BinsBillPayEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type BinsBillPayEnabled1 =
  | (typeof BinsBillPayEnabled1)[keyof typeof BinsBillPayEnabled1]
  | (number & {});

export const binsBillPayEnabled1Schema: EnumSchema<BinsBillPayEnabled1> =
  s.enumOf<BinsBillPayEnabled1>(BinsBillPayEnabled1);
