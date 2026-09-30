import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the letter status is ON or OFF.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **OFF**
 * - `1` - **ON**
 *
 * </details>
 */
export const MerchantsLetterStatus1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsLetterStatus1 =
  | (typeof MerchantsLetterStatus1)[keyof typeof MerchantsLetterStatus1]
  | (number & {});

export const merchantsLetterStatus1Schema: EnumSchema<MerchantsLetterStatus1> =
  s.enumOf<MerchantsLetterStatus1>(MerchantsLetterStatus1);
