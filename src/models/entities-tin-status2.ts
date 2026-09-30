import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Tax Identification Number (TIN) status of the entity.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Pending**
 * - `1` - **Valid**
 * - `2` - **Invalid**
 * - `3` - **Not required**
 *
 * </details>
 */
export const EntitiesTinStatus2 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type EntitiesTinStatus2 = (typeof EntitiesTinStatus2)[keyof typeof EntitiesTinStatus2] | (number & {});

export const entitiesTinStatus2Schema: EnumSchema<EntitiesTinStatus2> =
  s.enumOf<EntitiesTinStatus2>(EntitiesTinStatus2);
