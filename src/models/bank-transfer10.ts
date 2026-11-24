import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema,
  type AccountTypeTransactionsPaymentMethodBankTransferAccountType,
} from "./account-type-transactions-payment-method-bank-transfer-account-type.js";
import { bank9Schema, type Bank9 } from "./bank9.js";

export type BankTransfer10 = {
  /** The number or reference for the payer's bank account. */
  accountNumber?: string;
  /** The type of bank account associated with the payer's bank account. */
  accountType?: AccountTypeTransactionsPaymentMethodBankTransferAccountType;
  bank?: Bank9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankTransfer10Schema: Schema<BankTransfer10> = s.object<BankTransfer10>(
  {
    accountNumber: s.optional(s.string()),
    accountType: s.optional(s.lazy(() => accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema)),
    bank: s.optional(s.lazy(() => bank9Schema)),
    _keysMap: {
      accountNumber: "account_number",
      accountType: "account_type",
    },
  },
  { additionalProperties: s.json() },
);
