import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankTransferInternalSchema, bankTransferSchema, type BankTransfer } from "./bank-transfer.js";
import { card16InternalSchema, card16Schema, type Card16 } from "./card16.js";
import { function2Schema, type Function2 } from "./function2.js";

export type PaymentMethod28 = {
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
  card?: Card16;
  bankTransfer?: BankTransfer;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod28Properties: s.Shape<PaymentMethod28> = {
  functions: s.optional(s.array(s.lazy(() => function2Schema))),
  name: s.optional(s.string()),
  card: s.optional(s.lazy(() => card16InternalSchema)),
  bankTransfer: s.optional(s.lazy(() => bankTransferInternalSchema)),
  _keysMap: {
    bankTransfer: "bank_transfer",
  },
};

export const paymentMethod28InternalSchema: Schema<PaymentMethod28> = s.object<PaymentMethod28>(
  paymentMethod28Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod28Schema: Schema<PaymentMethod28> = s.lazySchema(() =>
  s.object<PaymentMethod28>(
    {
      ...paymentMethod28Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      card: s.optional(s.lazy(() => card16Schema)),
      bankTransfer: s.optional(s.lazy(() => bankTransferSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
