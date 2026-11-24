import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderTypeSchema,
  type AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType,
} from "./account-holder-type-merchants-payment-methods-bank-transfer-account-holder-type.js";
import {
  accountTypeMerchantsPaymentMethodsBankTransferAccountTypeSchema,
  type AccountTypeMerchantsPaymentMethodsBankTransferAccountType,
} from "./account-type-merchants-payment-methods-bank-transfer-account-type.js";
import { bankInternalSchema, bankSchema, type Bank } from "./bank.js";

export type BankTransfer = {
  /** Indicates if a person or business owns the account. */
  accountHolderType?: AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType;
  /** The type of bank account associated with the payer's bank account. */
  accountType?: AccountTypeMerchantsPaymentMethodsBankTransferAccountType;
  /** The number or reference for the payer's bank account */
  accountNumber?: string;
  bank?: Bank;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankTransferProperties: s.Shape<BankTransfer> = {
  accountHolderType: s.optional(
    s.lazy(() => accountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderTypeSchema),
  ),
  accountType: s.optional(s.lazy(() => accountTypeMerchantsPaymentMethodsBankTransferAccountTypeSchema)),
  accountNumber: s.optional(s.string()),
  bank: s.optional(s.lazy(() => bankInternalSchema)),
  _keysMap: {
    accountHolderType: "account_holder_type",
    accountType: "account_type",
    accountNumber: "account_number",
  },
};

export const bankTransferInternalSchema: Schema<BankTransfer> = s.object<BankTransfer>(
  bankTransferProperties,
  { additionalProperties: s.json() },
);

export const bankTransferSchema: Schema<BankTransfer> = s.lazySchema(() =>
  s.object<BankTransfer>(
    {
      ...bankTransferProperties,
      accountNumber: s.optional(s.string().check(s.maxLength(50))),
      bank: s.optional(s.lazy(() => bankSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
