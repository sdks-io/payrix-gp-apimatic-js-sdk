import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  channelAuthenticationsChannelSchema,
  type ChannelAuthenticationsChannel,
} from "./channel-authentications-channel.js";
import {
  currencyAuthenticationsCurrencySchema,
  type CurrencyAuthenticationsCurrency,
} from "./currency-authentications-currency.js";
import { device7InternalSchema, device7Schema, type Device7 } from "./device7.js";

export type DeviceSyncRequest = {
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
  /**
   * This is the country the merchant is domiciled in. For example, if the merchant is based in
   * Canada it must be set to CA.if the merchant is based in England it must be set to GB.if the
   * merchant is based in USA it must be set to US.The country in ISO-3166-1(alpha-2 code) format.
   */
  country?: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency?: CurrencyAuthenticationsCurrency;
  device?: Device7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const deviceSyncRequestProperties: s.Shape<DeviceSyncRequest> = {
  accountName: s.optional(s.string()),
  channel: s.optional(s.lazy(() => channelAuthenticationsChannelSchema)),
  country: s.optional(s.string()),
  currency: s.optional(s.lazy(() => currencyAuthenticationsCurrencySchema)),
  device: s.optional(s.lazy(() => device7InternalSchema)),
  _keysMap: {
    accountName: "account_name",
  },
};

export const deviceSyncRequestInternalSchema: Schema<DeviceSyncRequest> = s.object<DeviceSyncRequest>(
  deviceSyncRequestProperties,
  { additionalProperties: s.json() },
);

export const deviceSyncRequestSchema: Schema<DeviceSyncRequest> = s.lazySchema(() =>
  s.object<DeviceSyncRequest>(
    {
      ...deviceSyncRequestProperties,
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      country: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      device: s.optional(s.lazy(() => device7Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
