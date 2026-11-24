import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of bank account associated with the payer's bank account. */
export const AccountTypeTransactionsPaymentMethodBankTransferAccountType = {
  Checking: "CHECKING",
  Saving: "SAVING",
} as const;
export type AccountTypeTransactionsPaymentMethodBankTransferAccountType =
  | (typeof AccountTypeTransactionsPaymentMethodBankTransferAccountType)[keyof typeof AccountTypeTransactionsPaymentMethodBankTransferAccountType]
  | (string & {});

export const accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema: EnumSchema<AccountTypeTransactionsPaymentMethodBankTransferAccountType> =
  s.enumOf<AccountTypeTransactionsPaymentMethodBankTransferAccountType>(
    AccountTypeTransactionsPaymentMethodBankTransferAccountType,
  );
