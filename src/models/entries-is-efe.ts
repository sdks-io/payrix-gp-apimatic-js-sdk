import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntriesIsEfe = {
  _0: 0,
  _1: 1,
} as const;
export type EntriesIsEfe = (typeof EntriesIsEfe)[keyof typeof EntriesIsEfe] | (number & {});

export const entriesIsEfeSchema: EnumSchema<EntriesIsEfe> = s.enumOf<EntriesIsEfe>(EntriesIsEfe);
