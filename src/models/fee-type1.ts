import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the fee.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Fee.** A Standard Fee.
 * - `2` - **Assessment.** A Third-Party Platform Fee.
 *
 * </details>
 */
export const FeeType1 = {
  _1: 1,
  _2: 2,
} as const;
export type FeeType1 = (typeof FeeType1)[keyof typeof FeeType1] | (number & {});

export const feeType1Schema: EnumSchema<FeeType1> = s.enumOf<FeeType1>(FeeType1);
