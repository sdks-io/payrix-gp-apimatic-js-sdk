import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  channelLinksOrderTransactionConfigurationChannelSchema,
  type ChannelLinksOrderTransactionConfigurationChannel,
} from "./channel-links-order-transaction-configuration-channel.js";

export type TransactionConfiguration1 = {
  /**
   * This is the country the merchant is domiciled in. For example, if the merchant is based in
   * Canada it must be set to CA.if the merchant is based in England it must be set to GB.if the
   * merchant is based in USA it must be set to US.The country in ISO-3166-1(alpha-2 code) format.
   */
  country?: string;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario. `CP` - A Customer Present transaction is when the payer and the
   * merchant are in direct face to face contact when exchanging payment method information to
   * fulfill a transaction. e.g. in a store and paying at the counter that is attended by a clerk.
   * `CNP` - A Customer NOT Present transaction is when the payer and the merchant are not together
   * when exchanging payment method information to fulfill a transaction. e.g. a transaction
   * executed from a merchant's website or over the phone
   */
  channel?: ChannelLinksOrderTransactionConfigurationChannel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionConfiguration1Properties: s.Shape<TransactionConfiguration1> = {
  country: s.optional(s.string()),
  channel: s.optional(s.lazy(() => channelLinksOrderTransactionConfigurationChannelSchema)),
};

export const transactionConfiguration1InternalSchema: Schema<TransactionConfiguration1> =
  s.object<TransactionConfiguration1>(transactionConfiguration1Properties, {
    additionalProperties: s.json(),
  });

export const transactionConfiguration1Schema: Schema<TransactionConfiguration1> = s.lazySchema(() =>
  s.object<TransactionConfiguration1>(
    {
      ...transactionConfiguration1Properties,
      country: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
