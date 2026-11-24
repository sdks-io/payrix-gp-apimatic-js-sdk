import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allowedPaymentMethodSchema, type AllowedPaymentMethod } from "./allowed-payment-method.js";
import {
  captureModeLinksOrderTransactionConfigurationCaptureModeSchema,
  type CaptureModeLinksOrderTransactionConfigurationCaptureMode,
} from "./capture-mode-links-order-transaction-configuration-capture-mode.js";
import {
  channelLinksOrderTransactionConfigurationChannelSchema,
  type ChannelLinksOrderTransactionConfigurationChannel,
} from "./channel-links-order-transaction-configuration-channel.js";
import {
  currencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionModeSchema,
  type CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode,
} from "./currency-conversion-mode-links-order-transaction-configuration-currency-conversion-mode.js";
import { surchargeInternalSchema, surchargeSchema, type Surcharge } from "./surcharge.js";

export type TransactionConfiguration = {
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
  /**
   * This is the country the merchant is domiciled in. For example, if the merchant is based in
   * Canada it must be set to CA.if the merchant is based in England it must be set to GB.if the
   * merchant is based in USA it must be set to US.The country in ISO-3166-1(alpha-2 code) format.
   */
  country?: string;
  /**
   * Indicates whether the transaction is to be captured automatically, later or later using more
   * than 1 partial capture. `AUTO -`If a transaction is authorized, funds will exchange between the
   * payer and merchant automatically and as soon as possible. `LATER` - If a transaction is
   * authorized, funds will not exchange between the payer and merchant automatically and will
   * require a subsequent separate action to capture that transaction and start the funding process.
   * Only one successful capture is permitted. `MULTIPLE` - If a transaction is authorized, funds
   * will not exchange between the payer and merchant automatically. One or more subsequent separate
   * capture actions are required to capture that transaction in parts and start the funding process
   * for the part captured. One or many successful capture are permitted once the total amount
   * captured is within a range of the original authorized amount.
   */
  captureMode?: CaptureModeLinksOrderTransactionConfigurationCaptureMode;
  /** This field determines whether DCC is activated or not */
  currencyConversionMode?: CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode;
  /**
   * Indicates which payment method(s) to offer the customer, or route customers to a specific one.
   */
  allowedPaymentMethods?: AllowedPaymentMethod[];
  surcharge?: Surcharge[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionConfigurationProperties: s.Shape<TransactionConfiguration> = {
  channel: s.optional(s.lazy(() => channelLinksOrderTransactionConfigurationChannelSchema)),
  country: s.optional(s.string()),
  captureMode: s.optional(s.lazy(() => captureModeLinksOrderTransactionConfigurationCaptureModeSchema)),
  currencyConversionMode: s.optional(
    s.lazy(() => currencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionModeSchema),
  ),
  allowedPaymentMethods: s.optional(s.array(s.lazy(() => allowedPaymentMethodSchema))),
  surcharge: s.optional(s.array(s.lazy(() => surchargeInternalSchema))),
  _keysMap: {
    captureMode: "capture_mode",
    currencyConversionMode: "currency_conversion_mode",
    allowedPaymentMethods: "allowed_payment_methods",
  },
};

export const transactionConfigurationInternalSchema: Schema<TransactionConfiguration> =
  s.object<TransactionConfiguration>(transactionConfigurationProperties, { additionalProperties: s.json() });

export const transactionConfigurationSchema: Schema<TransactionConfiguration> = s.lazySchema(() =>
  s.object<TransactionConfiguration>(
    {
      ...transactionConfigurationProperties,
      country: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      surcharge: s.optional(s.array(s.lazy(() => surchargeSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
