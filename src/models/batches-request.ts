import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  channelAuthenticationsChannelSchema,
  type ChannelAuthenticationsChannel,
} from "./channel-authentications-channel.js";
import { countryBatchesCountrySchema, type CountryBatchesCountry } from "./country-batches-country.js";
import { paymentMethods7Schema, type PaymentMethods7 } from "./payment-methods7.js";

export type BatchesRequest = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific account. Begins with the three letters,
   * TRA.
   */
  accountId?: string;
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario.
   * * `CP` - A Customer Present transaction is when the payer and the merchant are in direct face
   *   to face contact when exchanging payment method information to fulfill a transaction. e.g. in
   *   a store and paying at the counter that is attended by a clerk.
   * * `CNP` - A Customer NOT Present transaction is when the payer and the merchant are not
   *   together when exchanging payment method information to fulfill a transaction. e.g. a
   *   transaction executed from a merchant's website or over the phone
   */
  channel?: ChannelAuthenticationsChannel;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /**
   * This is the country the merchant is domiciled in. For example, if the merchant is based in
   * Canada it must be set to CA.if the merchant is based in England it must be set to GB.if the
   * merchant is based in USA it must be set to US.The country in ISO-3166-1(alpha-2 code) format.
   */
  country?: CountryBatchesCountry;
  /** Indicates the Payment Methods used to carry out the transactions in the batch */
  paymentMethods?: PaymentMethods7[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchesRequestProperties: s.Shape<BatchesRequest> = {
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  channel: s.optional(s.lazy(() => channelAuthenticationsChannelSchema)),
  currency: s.optional(s.string()),
  country: s.optional(s.lazy(() => countryBatchesCountrySchema)),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethods7Schema))),
  _keysMap: {
    accountId: "account_id",
    accountName: "account_name",
    paymentMethods: "payment_methods",
  },
};

export const batchesRequestInternalSchema: Schema<BatchesRequest> = s.object<BatchesRequest>(
  batchesRequestProperties,
  { additionalProperties: s.json() },
);

export const batchesRequestSchema: Schema<BatchesRequest> = s.lazySchema(() =>
  s.object<BatchesRequest>(
    {
      ...batchesRequestProperties,
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
