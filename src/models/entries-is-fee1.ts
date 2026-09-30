import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An integer-boolean indicating whether or not the funding activity was triggered by a fee
 * assessment. <details> <summary>Valid Values</summary>
 * - `0` - **Off.** - `1` - **On.** </details>
 */
export const EntriesIsFee1 = {
  _0: 0,
  _1: 1,
} as const;
export type EntriesIsFee1 = (typeof EntriesIsFee1)[keyof typeof EntriesIsFee1] | (number & {});

export const entriesIsFee1Schema: EnumSchema<EntriesIsFee1> = s.enumOf<EntriesIsFee1>(EntriesIsFee1);
