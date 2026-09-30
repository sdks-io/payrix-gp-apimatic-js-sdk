import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource is marked as pending.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Pending.**
 * - `1` - **Pending.**
 *
 * </details>
 */
export const PendingEntriesPending1 = {
  _0: 0,
  _1: 1,
} as const;
export type PendingEntriesPending1 =
  | (typeof PendingEntriesPending1)[keyof typeof PendingEntriesPending1]
  | (number & {});

export const pendingEntriesPending1Schema: EnumSchema<PendingEntriesPending1> =
  s.enumOf<PendingEntriesPending1>(PendingEntriesPending1);
