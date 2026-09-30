import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountUpdaterEligible = {
  _1: 1,
  _0: 0,
} as const;
export type AccountUpdaterEligible =
  | (typeof AccountUpdaterEligible)[keyof typeof AccountUpdaterEligible]
  | (number & {});

export const accountUpdaterEligibleSchema: EnumSchema<AccountUpdaterEligible> =
  s.enumOf<AccountUpdaterEligible>(AccountUpdaterEligible);
