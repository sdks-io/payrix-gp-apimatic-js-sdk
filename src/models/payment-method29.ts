import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankTransfer2InternalSchema, bankTransfer2Schema, type BankTransfer2 } from "./bank-transfer2.js";
import { function2Schema, type Function2 } from "./function2.js";

export type PaymentMethod29 = {
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
  functions?: Function2[];
  /** The name of the payment method */
  name?: string;
  bankTransfer?: BankTransfer2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod29Properties: s.Shape<PaymentMethod29> = {
  functions: s.optional(s.array(s.lazy(() => function2Schema))),
  name: s.optional(s.string()),
  bankTransfer: s.optional(s.lazy(() => bankTransfer2InternalSchema)),
  _keysMap: {
    bankTransfer: "bank_transfer",
  },
};

export const paymentMethod29InternalSchema: Schema<PaymentMethod29> = s.object<PaymentMethod29>(
  paymentMethod29Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod29Schema: Schema<PaymentMethod29> = s.lazySchema(() =>
  s.object<PaymentMethod29>(
    {
      ...paymentMethod29Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      bankTransfer: s.optional(s.lazy(() => bankTransfer2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
