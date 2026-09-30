import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BinsDebitOverCreditEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type BinsDebitOverCreditEnabled =
  | (typeof BinsDebitOverCreditEnabled)[keyof typeof BinsDebitOverCreditEnabled]
  | (number & {});

export const binsDebitOverCreditEnabledSchema: EnumSchema<BinsDebitOverCreditEnabled> =
  s.enumOf<BinsDebitOverCreditEnabled>(BinsDebitOverCreditEnabled);
