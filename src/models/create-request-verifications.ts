import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  additionalMerchantDetailsInternalSchema,
  additionalMerchantDetailsSchema,
  type AdditionalMerchantDetails,
} from "./additional-merchant-details.js";
import {
  channelVerificationsChannelSchema,
  type ChannelVerificationsChannel,
} from "./channel-verifications-channel.js";
import {
  currencyBatchesTransactionsCurrencySchema,
  type CurrencyBatchesTransactionsCurrency,
} from "./currency-batches-transactions-currency.js";
import { device9InternalSchema, device9Schema, type Device9 } from "./device9.js";
import {
  initiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiatorSchema,
  type InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator,
} from "./initiator-links-order-payment-method-configuration-stored-credential-initiator.js";
import { payer9InternalSchema, payer9Schema, type Payer9 } from "./payer9.js";
import {
  paymentMethod51InternalSchema,
  paymentMethod51Schema,
  type PaymentMethod51,
} from "./payment-method51.js";

export type CreateRequestVerifications = {
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario.
   * * `CP` - A Customer Present transaction is when the payer and the merchant are in direct face
   *   to face contact when exchanging payment method information to fulfill a transaction. e.g. in
   *   a store and paying at the counter that is attended by a clerk
   * * `CNP` - A Customer NOT Present transaction is when the payer and the merchant are not
   *   together when exchanging payment method information to fulfill a transaction. e.g. a
   *   transaction executed from a merchant's website or over the phone
   */
  channel: ChannelVerificationsChannel;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency: CurrencyBatchesTransactionsCurrency;
  /** Merchant defined field to reference the transaction. */
  reference: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country: string;
  paymentMethod?: PaymentMethod51;
  payer?: Payer9;
  device?: Device9;
  /**
   * Indicates whether the Merchant or the Payer initiated the creation of a transaction.
   * * `PAYER` - The transaction was initiated by the customer who is paying the merchant.
   * * `MERCHANT` - The transaction was initiated by the merchant, who is getting paid by the payer.
   */
  initiator?: InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator;
  additionalMerchantDetails?: AdditionalMerchantDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequestVerificationsProperties: s.Shape<CreateRequestVerifications> = {
  accountName: s.string(),
  accountId: s.optional(s.string()),
  channel: channelVerificationsChannelSchema,
  currency: currencyBatchesTransactionsCurrencySchema,
  reference: s.string(),
  country: s.string(),
  paymentMethod: s.optional(s.lazy(() => paymentMethod51InternalSchema)),
  payer: s.optional(s.lazy(() => payer9InternalSchema)),
  device: s.optional(s.lazy(() => device9InternalSchema)),
  initiator: s.optional(
    s.lazy(() => initiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiatorSchema),
  ),
  additionalMerchantDetails: s.optional(s.lazy(() => additionalMerchantDetailsInternalSchema)),
  _keysMap: {
    accountName: "account_name",
    accountId: "account_id",
    paymentMethod: "payment_method",
    additionalMerchantDetails: "additional_merchant_details",
  },
};

export const createRequestVerificationsInternalSchema: Schema<CreateRequestVerifications> =
  s.object<CreateRequestVerifications>(createRequestVerificationsProperties, {
    additionalProperties: s.json(),
  });

export const createRequestVerificationsSchema: Schema<CreateRequestVerifications> = s.lazySchema(() =>
  s.object<CreateRequestVerifications>(
    {
      ...createRequestVerificationsProperties,
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.string().check(s.minLength(8), s.maxLength(50)),
      paymentMethod: s.optional(s.lazy(() => paymentMethod51Schema)),
      payer: s.optional(s.lazy(() => payer9Schema)),
      device: s.optional(s.lazy(() => device9Schema)),
      additionalMerchantDetails: s.optional(s.lazy(() => additionalMerchantDetailsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
