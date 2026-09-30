import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource is marked as a fee.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not a Fee.**
 * - `1` - **Is a Fee.**
 *
 * </details>
 */
export const PendingEntriesIsFee1 = {
  _0: 0,
  _1: 1,
} as const;
export type PendingEntriesIsFee1 =
  | (typeof PendingEntriesIsFee1)[keyof typeof PendingEntriesIsFee1]
  | (number & {});

export const pendingEntriesIsFee1Schema: EnumSchema<PendingEntriesIsFee1> =
  s.enumOf<PendingEntriesIsFee1>(PendingEntriesIsFee1);
