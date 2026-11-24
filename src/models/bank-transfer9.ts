import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema,
  type AccountTypeTransactionsPaymentMethodBankTransferAccountType,
} from "./account-type-transactions-payment-method-bank-transfer-account-type.js";
import { bank14Schema, type Bank14 } from "./bank14.js";
import {
  verificationLevelVerificationsPaymentMethodBankTransferVerificationLevelSchema,
  type VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel,
} from "./verification-level-verifications-payment-method-bank-transfer-verification-level.js";

export type BankTransfer9 = {
  /** The number or reference for the payer's bank account. */
  accountNumber?: string;
  /** The type of bank account associated with the payer's bank account. */
  accountType?: AccountTypeTransactionsPaymentMethodBankTransferAccountType;
  /** The number or reference for the check. */
  checkReference?: string;
  /** Determines the level at which the ACH account is verified by the host system. */
  verificationLevel?: VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel;
  bank?: Bank14;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankTransfer9Schema: Schema<BankTransfer9> = s.object<BankTransfer9>(
  {
    accountNumber: s.optional(s.string()),
    accountType: s.optional(s.lazy(() => accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema)),
    checkReference: s.optional(s.string()),
    verificationLevel: s.optional(
      s.lazy(() => verificationLevelVerificationsPaymentMethodBankTransferVerificationLevelSchema),
    ),
    bank: s.optional(s.lazy(() => bank14Schema)),
    _keysMap: {
      accountNumber: "account_number",
      accountType: "account_type",
      checkReference: "check_reference",
      verificationLevel: "verification_level",
    },
  },
  { additionalProperties: s.json() },
);
