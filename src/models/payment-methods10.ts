import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankTransfer2InternalSchema, bankTransfer2Schema, type BankTransfer2 } from "./bank-transfer2.js";
import { functions4Schema, type Functions4 } from "./functions4.js";

export type PaymentMethods10 = {
  /**
   * Describes the functions that a payment method can have for the merchant.
   *   * `ACCOUNT_ACTIVATION_FEE` is the account that will be billed for account activation or
   *     account renewal fees.
   *   * `PRIMARY_PAYOUT` is the account to which merchant funds will be transferred (excepting
   *     "split sweep" configured merchants). In the case of a negative balance, funds may be pulled
   *     from this account as well.
   *   * `SECONDARY_PAYOUT` is the account to which merchant funds will be transferred if the
   *     account is configured for "split sweeps".'
   *   * `FEES` - Payment method from which processing fees will be pulled if the merchant is
   *     configured for gross settlement.
   */
  functions?: Functions4[];
  /** The name of the payment method */
  name?: string;
  bankTransfer?: BankTransfer2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethods10Properties: s.Shape<PaymentMethods10> = {
  functions: s.optional(s.array(s.lazy(() => functions4Schema))),
  name: s.optional(s.string()),
  bankTransfer: s.optional(s.lazy(() => bankTransfer2InternalSchema)),
  _keysMap: {
    bankTransfer: "bank_transfer",
  },
};

export const paymentMethods10InternalSchema: Schema<PaymentMethods10> = s.object<PaymentMethods10>(
  paymentMethods10Properties,
  { additionalProperties: s.json() },
);

export const paymentMethods10Schema: Schema<PaymentMethods10> = s.lazySchema(() =>
  s.object<PaymentMethods10>(
    {
      ...paymentMethods10Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      bankTransfer: s.optional(s.lazy(() => bankTransfer2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
