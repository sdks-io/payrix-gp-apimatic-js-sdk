import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  channelAuthenticationsChannelSchema,
  type ChannelAuthenticationsChannel,
} from "./channel-authentications-channel.js";
import {
  countryAuthenticationsCountrySchema,
  type CountryAuthenticationsCountry,
} from "./country-authentications-country.js";
import {
  currencyAuthenticationsCurrencySchema,
  type CurrencyAuthenticationsCurrency,
} from "./currency-authentications-currency.js";
import { mobileDataSchema, type MobileData } from "./mobile-data.js";
import { notifications3InternalSchema, notifications3Schema, type Notifications3 } from "./notifications3.js";
import {
  paymentMethod6InternalSchema,
  paymentMethod6Schema,
  type PaymentMethod6,
} from "./payment-method6.js";

export type CreateRequestAuthentications = {
  /** A meaningful label that better identifies the account. */
  accountName: string;
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
  /**
   * This is the country the merchant is domiciled in. For example, if the merchant is based in
   * Canada it must be set to CA. if the merchant is based in England it must be set to GB. if the
   * merchant is based in USA it must be set to US. The country in ISO-3166-1(alpha-2 code) format.
   */
  country: CountryAuthenticationsCountry;
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point. Note
   * for European merchants: This field is mandatory for SCA.
   */
  amount: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency: CurrencyAuthenticationsCurrency;
  /** Merchant defined field to reference the authentication. */
  reference: string;
  paymentMethod: PaymentMethod6;
  notifications: Notifications3;
  mobileData?: MobileData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequestAuthenticationsProperties: s.Shape<CreateRequestAuthentications> = {
  accountName: s.string(),
  channel: s.optional(s.lazy(() => channelAuthenticationsChannelSchema)),
  country: countryAuthenticationsCountrySchema,
  amount: s.string(),
  currency: currencyAuthenticationsCurrencySchema,
  reference: s.string(),
  paymentMethod: paymentMethod6InternalSchema,
  notifications: notifications3InternalSchema,
  mobileData: s.optional(s.lazy(() => mobileDataSchema)),
  _keysMap: {
    accountName: "account_name",
    paymentMethod: "payment_method",
    mobileData: "mobile_data",
  },
};

export const createRequestAuthenticationsInternalSchema: Schema<CreateRequestAuthentications> =
  s.object<CreateRequestAuthentications>(createRequestAuthenticationsProperties, {
    additionalProperties: s.json(),
  });

export const createRequestAuthenticationsSchema: Schema<CreateRequestAuthentications> = s.lazySchema(() =>
  s.object<CreateRequestAuthentications>(
    {
      ...createRequestAuthenticationsProperties,
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      amount: s.string().check(s.minLength(1), s.maxLength(50)),
      reference: s.string().check(s.minLength(1), s.maxLength(50)),
      paymentMethod: paymentMethod6Schema,
      notifications: notifications3Schema,
    },
    { additionalProperties: s.json() },
  ),
);
