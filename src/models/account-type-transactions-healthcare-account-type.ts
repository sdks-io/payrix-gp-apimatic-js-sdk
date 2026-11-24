import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identifies the type of health care account being used. */
export const AccountTypeTransactionsHealthcareAccountType = {
  Fsa: "FSA",
  Hsa: "HSA",
} as const;
export type AccountTypeTransactionsHealthcareAccountType =
  | (typeof AccountTypeTransactionsHealthcareAccountType)[keyof typeof AccountTypeTransactionsHealthcareAccountType]
  | (string & {});

export const accountTypeTransactionsHealthcareAccountTypeSchema: EnumSchema<AccountTypeTransactionsHealthcareAccountType> =
  s.enumOf<AccountTypeTransactionsHealthcareAccountType>(AccountTypeTransactionsHealthcareAccountType);
