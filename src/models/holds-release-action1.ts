import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The final action taken on the hold while it's been released.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Holds released because the hold resource was approved.**
 * - `2` - **Holds released because the hold resource was cancelled.**
 * - `3` - **Holds released because the hold resource was refunded.**
 * - `4` - **Holds released because the hold resource was failed.**
 * - `5` - **Expired.**
 *
 * </details>
 */
export const HoldsReleaseAction1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type HoldsReleaseAction1 =
  | (typeof HoldsReleaseAction1)[keyof typeof HoldsReleaseAction1]
  | (number & {});

export const holdsReleaseAction1Schema: EnumSchema<HoldsReleaseAction1> =
  s.enumOf<HoldsReleaseAction1>(HoldsReleaseAction1);
