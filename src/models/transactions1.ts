import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allowedPaymentMethodSchema, type AllowedPaymentMethod } from "./allowed-payment-method.js";
import {
  channelLinksTransactionsChannelSchema,
  type ChannelLinksTransactionsChannel,
} from "./channel-links-transactions-channel.js";

export type Transactions1 = {
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario. * CP - A Customer Present transaction is when the payer and the
   * merchant are in direct face to face contact when exchanging payment method information to
   * fulfill a transaction. e.g. in a store and paying at the counter that is attended by a clerk. *
   * CNP - A Customer NOT Present transaction is when the payer and the merchant are not together
   * when exchanging payment method information to fulfill a transaction. e.g. a transaction
   * executed from a merchant's website or over the phone
   */
  channel?: ChannelLinksTransactionsChannel;
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /** The country in ISO-3166-1 (alpha-2 code) format. */
  country?: string;
  /**
   * The payment methods available to create transactions with. * `CARD` - Debit, credit, charge or
   * prepaid; local or international, consumer or corporate payment method based on a 12 to 16
   * digital number, expiry date and security code.
   */
  allowedPaymentMethods?: AllowedPaymentMethod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactions1Properties: s.Shape<Transactions1> = {
  channel: s.optional(s.lazy(() => channelLinksTransactionsChannelSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  country: s.optional(s.string()),
  allowedPaymentMethods: s.optional(s.array(s.lazy(() => allowedPaymentMethodSchema))),
  _keysMap: {
    allowedPaymentMethods: "allowed_payment_methods",
  },
};

export const transactions1InternalSchema: Schema<Transactions1> = s.object<Transactions1>(
  transactions1Properties,
  { additionalProperties: s.json() },
);

export const transactions1Schema: Schema<Transactions1> = s.lazySchema(() =>
  s.object<Transactions1>(
    {
      ...transactions1Properties,
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
