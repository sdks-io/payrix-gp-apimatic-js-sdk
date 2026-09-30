import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource is marked as frozen.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Frozen**
 * - `1` - **Frozen**
 *
 * </details>
 */
export const Frozen1 = {
  _0: 0,
  _1: 1,
} as const;
export type Frozen1 = (typeof Frozen1)[keyof typeof Frozen1] | (number & {});

export const frozen1Schema: EnumSchema<Frozen1> = s.enumOf<Frozen1>(Frozen1);
