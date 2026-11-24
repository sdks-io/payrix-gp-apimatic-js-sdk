import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of bank account associated with the payer's bank account. */
export const AccountTypeVerificationsPaymentMethodBankTransferAccountType = {
  Checking: "CHECKING",
  Saving: "SAVING",
} as const;
export type AccountTypeVerificationsPaymentMethodBankTransferAccountType =
  | (typeof AccountTypeVerificationsPaymentMethodBankTransferAccountType)[keyof typeof AccountTypeVerificationsPaymentMethodBankTransferAccountType]
  | (string & {});

export const accountTypeVerificationsPaymentMethodBankTransferAccountTypeSchema: EnumSchema<AccountTypeVerificationsPaymentMethodBankTransferAccountType> =
  s.enumOf<AccountTypeVerificationsPaymentMethodBankTransferAccountType>(
    AccountTypeVerificationsPaymentMethodBankTransferAccountType,
  );
