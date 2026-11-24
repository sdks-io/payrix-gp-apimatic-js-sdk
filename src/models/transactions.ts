import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allowedPaymentMethodSchema, type AllowedPaymentMethod } from "./allowed-payment-method.js";
import {
  channelLinksTransactionsChannelSchema,
  type ChannelLinksTransactionsChannel,
} from "./channel-links-transactions-channel.js";
import { riskAssessment2Schema, type RiskAssessment2 } from "./risk-assessment2.js";

export type Transactions = {
  /**
   * The payment methods available to create transactions with. * `CARD` - Debit, credit, charge or
   * prepaid; local or international, consumer or corporate payment method based on a 12 to 16
   * digital number, expiry date and security code.
   */
  allowedPaymentMethods: AllowedPaymentMethod[];
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency.
   */
  amount: string;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario. * CP - A Customer Present transaction is when the payer and the
   * merchant are in direct face to face contact when exchanging payment method information to
   * fulfill a transaction. e.g. in a store and paying at the counter that is attended by a clerk. *
   * CNP - A Customer NOT Present transaction is when the payer and the merchant are not together
   * when exchanging payment method information to fulfill a transaction. e.g. a transaction
   * executed from a merchant's website or over the phone
   */
  channel: ChannelLinksTransactionsChannel;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency: string;
  /** The country in ISO-3166-1 (alpha-2 code) format. */
  country: string;
  /**
   * Contains the value a merchant wishes to appear on the payer's payment method statement for this
   * transaction.
   */
  narrative?: string;
  riskAssessment?: RiskAssessment2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionsProperties: s.Shape<Transactions> = {
  allowedPaymentMethods: s.array(s.lazy(() => allowedPaymentMethodSchema)),
  amount: s.string(),
  channel: channelLinksTransactionsChannelSchema,
  currency: s.string(),
  country: s.string(),
  narrative: s.optional(s.string()),
  riskAssessment: s.optional(s.lazy(() => riskAssessment2Schema)),
  _keysMap: {
    allowedPaymentMethods: "allowed_payment_methods",
    riskAssessment: "risk_assessment",
  },
};

export const transactionsInternalSchema: Schema<Transactions> = s.object<Transactions>(
  transactionsProperties,
  { additionalProperties: s.json() },
);

export const transactionsSchema: Schema<Transactions> = s.lazySchema(() =>
  s.object<Transactions>(
    {
      ...transactionsProperties,
      currency: s.string().check(s.minLength(3), s.maxLength(3)),
    },
    { additionalProperties: s.json() },
  ),
);
