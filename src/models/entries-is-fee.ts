import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntriesIsFee = {
  _0: 0,
  _1: 1,
} as const;
export type EntriesIsFee = (typeof EntriesIsFee)[keyof typeof EntriesIsFee] | (number & {});

export const entriesIsFeeSchema: EnumSchema<EntriesIsFee> = s.enumOf<EntriesIsFee>(EntriesIsFee);
