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
import { bank2InternalSchema, bank2Schema, type Bank2 } from "./bank2.js";

export type BankTransfer2 = {
  /** Indicates if a person or business owns the account. */
  accountHolderType?: AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType;
  /** The last 4 digits of the merchant's bank account */
  maskedNumberLast4?: string;
  /** The type of bank account associated with the payer's bank account. */
  accountType?: AccountTypeMerchantsPaymentMethodsBankTransferAccountType;
  bank?: Bank2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankTransfer2Properties: s.Shape<BankTransfer2> = {
  accountHolderType: s.optional(
    s.lazy(() => accountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderTypeSchema),
  ),
  maskedNumberLast4: s.optional(s.string()),
  accountType: s.optional(s.lazy(() => accountTypeMerchantsPaymentMethodsBankTransferAccountTypeSchema)),
  bank: s.optional(s.lazy(() => bank2InternalSchema)),
  _keysMap: {
    accountHolderType: "account_holder_type",
    maskedNumberLast4: "masked_number_last4",
    accountType: "account_type",
  },
};

export const bankTransfer2InternalSchema: Schema<BankTransfer2> = s.object<BankTransfer2>(
  bankTransfer2Properties,
  { additionalProperties: s.json() },
);

export const bankTransfer2Schema: Schema<BankTransfer2> = s.lazySchema(() =>
  s.object<BankTransfer2>(
    {
      ...bankTransfer2Properties,
      bank: s.optional(s.lazy(() => bank2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
