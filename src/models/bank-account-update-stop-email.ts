import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankAccountUpdateStopEmail = {
  _0: 0,
  _1: 1,
} as const;
export type BankAccountUpdateStopEmail =
  | (typeof BankAccountUpdateStopEmail)[keyof typeof BankAccountUpdateStopEmail]
  | (number & {});

export const bankAccountUpdateStopEmailSchema: EnumSchema<BankAccountUpdateStopEmail> =
  s.enumOf<BankAccountUpdateStopEmail>(BankAccountUpdateStopEmail);
