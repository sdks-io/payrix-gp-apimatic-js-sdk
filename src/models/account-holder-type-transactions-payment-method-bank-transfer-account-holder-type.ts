import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the category of the bank account */
export const AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType = {
  Personal: "PERSONAL",
  Business: "BUSINESS",
  Payroll: "PAYROLL",
} as const;
export type AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType =
  | (typeof AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType)[keyof typeof AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType]
  | (string & {});

export const accountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderTypeSchema: EnumSchema<AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType> =
  s.enumOf<AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType>(
    AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType,
  );
