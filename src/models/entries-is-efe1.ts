import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An integer-boolean indicating whether or not the funding activity was triggered by a fee
 * assessment.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Off**
 * - `1` - **On**
 *
 * </details>
 */
export const EntriesIsEfe1 = {
  _0: 0,
  _1: 1,
} as const;
export type EntriesIsEfe1 = (typeof EntriesIsEfe1)[keyof typeof EntriesIsEfe1] | (number & {});

export const entriesIsEfe1Schema: EnumSchema<EntriesIsEfe1> = s.enumOf<EntriesIsEfe1>(EntriesIsEfe1);
