import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BinsType = {
  Credit: "credit",
  Debit: "debit",
  DebitCredit: "debitCredit",
  Charge: "charge",
  Prepaid: "prepaid",
  BankAccount: "bankAccount",
} as const;
export type BinsType = (typeof BinsType)[keyof typeof BinsType] | (string & {});

export const binsTypeSchema: EnumSchema<BinsType> = s.enumOf<BinsType>(BinsType);
