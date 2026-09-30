import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingEntriesIsEfe = {
  _0: 0,
  _1: 1,
} as const;
export type PendingEntriesIsEfe =
  | (typeof PendingEntriesIsEfe)[keyof typeof PendingEntriesIsEfe]
  | (number & {});

export const pendingEntriesIsEfeSchema: EnumSchema<PendingEntriesIsEfe> =
  s.enumOf<PendingEntriesIsEfe>(PendingEntriesIsEfe);
