import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingEntriesIsFee = {
  _0: 0,
  _1: 1,
} as const;
export type PendingEntriesIsFee =
  | (typeof PendingEntriesIsFee)[keyof typeof PendingEntriesIsFee]
  | (number & {});

export const pendingEntriesIsFeeSchema: EnumSchema<PendingEntriesIsFee> =
  s.enumOf<PendingEntriesIsFee>(PendingEntriesIsFee);
