import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource is marked as inactive.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Active**
 * - `1` - **Inactive**
 *
 * </details>
 */
export const Inactive1 = {
  _0: 0,
  _1: 1,
} as const;
export type Inactive1 = (typeof Inactive1)[keyof typeof Inactive1] | (number & {});

export const inactive1Schema: EnumSchema<Inactive1> = s.enumOf<Inactive1>(Inactive1);
