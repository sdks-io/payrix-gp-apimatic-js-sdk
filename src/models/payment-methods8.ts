import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankTransferInternalSchema, bankTransferSchema, type BankTransfer } from "./bank-transfer.js";
import { card15InternalSchema, card15Schema, type Card15 } from "./card15.js";
import { functions4Schema, type Functions4 } from "./functions4.js";

export type PaymentMethods8 = {
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
  /** A client indicated payment method reference number. */
  reference?: string;
  card?: Card15;
  bankTransfer?: BankTransfer;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethods8Properties: s.Shape<PaymentMethods8> = {
  functions: s.optional(s.array(s.lazy(() => functions4Schema))),
  name: s.optional(s.string()),
  reference: s.optional(s.string()),
  card: s.optional(s.lazy(() => card15InternalSchema)),
  bankTransfer: s.optional(s.lazy(() => bankTransferInternalSchema)),
  _keysMap: {
    bankTransfer: "bank_transfer",
  },
};

export const paymentMethods8InternalSchema: Schema<PaymentMethods8> = s.object<PaymentMethods8>(
  paymentMethods8Properties,
  { additionalProperties: s.json() },
);

export const paymentMethods8Schema: Schema<PaymentMethods8> = s.lazySchema(() =>
  s.object<PaymentMethods8>(
    {
      ...paymentMethods8Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      reference: s.optional(s.string().check(s.maxLength(50))),
      card: s.optional(s.lazy(() => card15Schema)),
      bankTransfer: s.optional(s.lazy(() => bankTransferSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
