import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingEntriesPending = {
  _0: 0,
  _1: 1,
} as const;
export type PendingEntriesPending =
  | (typeof PendingEntriesPending)[keyof typeof PendingEntriesPending]
  | (number & {});

export const pendingEntriesPendingSchema: EnumSchema<PendingEntriesPending> =
  s.enumOf<PendingEntriesPending>(PendingEntriesPending);
