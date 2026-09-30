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
export const PendingEntriesIsEfe1 = {
  _0: 0,
  _1: 1,
} as const;
export type PendingEntriesIsEfe1 =
  | (typeof PendingEntriesIsEfe1)[keyof typeof PendingEntriesIsEfe1]
  | (number & {});

export const pendingEntriesIsEfe1Schema: EnumSchema<PendingEntriesIsEfe1> =
  s.enumOf<PendingEntriesIsEfe1>(PendingEntriesIsEfe1);
