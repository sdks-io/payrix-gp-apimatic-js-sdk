import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema,
  type AccountTypeTransactionsPaymentMethodBankTransferAccountType,
} from "./account-type-transactions-payment-method-bank-transfer-account-type.js";
import { bank9Schema, type Bank9 } from "./bank9.js";

export type BankTransferResponse = {
  /** The last 4 characters of the local reference for a bank account number. */
  maskedAccountNumberLast4?: string;
  /** The type of bank account associated with the payer's bank account. */
  accountType?: AccountTypeTransactionsPaymentMethodBankTransferAccountType;
  bank?: Bank9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankTransferResponseSchema: Schema<BankTransferResponse> = s.object<BankTransferResponse>(
  {
    maskedAccountNumberLast4: s.optional(s.string()),
    accountType: s.optional(s.lazy(() => accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema)),
    bank: s.optional(s.lazy(() => bank9Schema)),
    _keysMap: {
      maskedAccountNumberLast4: "masked_account_number_last4",
      accountType: "account_type",
    },
  },
  { additionalProperties: s.json() },
);
