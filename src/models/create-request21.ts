import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  AutoUpdaterPaymentMethodsAutoUpdater,
  autoUpdaterPaymentMethodsAutoUpdaterSchema,
} from "./auto-updater-payment-methods-auto-updater.js";
import { card19InternalSchema, card19Schema, type Card19 } from "./card19.js";
import {
  fingerprintModePaymentMethodsFingerprintModeSchema,
  type FingerprintModePaymentMethodsFingerprintMode,
} from "./fingerprint-mode-payment-methods-fingerprint-mode.js";
import { payer4InternalSchema, payer4Schema, type Payer4 } from "./payer4.js";
import {
  UsageModePaymentMethodsUsageMode,
  usageModePaymentMethodsUsageModeSchema,
} from "./usage-mode-payment-methods-usage-mode.js";

export type CreateRequest21 = {
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** Merchant defined field to uniquely reference the stored payment method. */
  reference: string;
  /**
   * Indicates the behaviour of the payment method token.
   * * `SINGLE` - This value must be used if using the Hosted Fields or the Drop-in UI integration
   *   types. When creating the payment method token, this option ensures the payment method token
   *   is temporary and will be removed once a transaction is executed or after a short period of
   *   time.
   * * `MULTIPLE` - When creating the payment method token, this indicates it is permanent and can
   *   be used to create many transactions.
   * * `USE_CARD_NUMBER` - When using the payment method token to transaction process, this
   *   indicates to use the card number also known as the PAN or FPAN when bothe the card number and
   *   the network token are available.
   * * `USE_NETWORK_TOKEN` - When using the payment method token to transaction process, this
   *   indicates to use the network token instead of the card number if both are available.
   *
   * @default UsageModePaymentMethodsUsageMode.Multiple
   */
  usageMode?: UsageModePaymentMethodsUsageMode;
  /**
   * Indicates whether to execute the fingerprint signature functionality.
   * * `ALWAYS` - Always check and create the fingerprint value regardless of the result of the card
   *   authorization.
   * * `ON_SUCCESS` - Always check and create the fingerprint value when the card authorization is
   *   successful.
   */
  fingerprintMode?: FingerprintModePaymentMethodsFingerprintMode;
  /** The name of the owner of the payment method. For example the cardholder's name. */
  name?: string;
  /**
   * Indicates whether this payment token should be enabled for account updater services.
   * Availability of this is dependent on your live configuration
   *
   * @default AutoUpdaterPaymentMethodsAutoUpdater.Disable
   */
  autoUpdater?: AutoUpdaterPaymentMethodsAutoUpdater;
  payer?: Payer4;
  card: Card19;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequest21Properties: s.Shape<CreateRequest21> = {
  accountName: s.optional(s.string()),
  reference: s.string(),
  usageMode: s.defaulted(usageModePaymentMethodsUsageModeSchema, UsageModePaymentMethodsUsageMode.Multiple),
  fingerprintMode: s.optional(s.lazy(() => fingerprintModePaymentMethodsFingerprintModeSchema)),
  name: s.optional(s.string()),
  autoUpdater: s.defaulted(
    autoUpdaterPaymentMethodsAutoUpdaterSchema,
    AutoUpdaterPaymentMethodsAutoUpdater.Disable,
  ),
  payer: s.optional(s.lazy(() => payer4InternalSchema)),
  card: card19InternalSchema,
  _keysMap: {
    accountName: "account_name",
    usageMode: "usage_mode",
    fingerprintMode: "fingerprint_mode",
    autoUpdater: "auto_updater",
  },
};

export const createRequest21InternalSchema: Schema<CreateRequest21> = s.object<CreateRequest21>(
  createRequest21Properties,
  { additionalProperties: s.json() },
);

export const createRequest21Schema: Schema<CreateRequest21> = s.lazySchema(() =>
  s.object<CreateRequest21>(
    {
      ...createRequest21Properties,
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.string().check(s.minLength(8), s.maxLength(50)),
      name: s.optional(s.string().check(s.maxLength(100))),
      payer: s.optional(s.lazy(() => payer4Schema)),
      card: card19Schema,
    },
    { additionalProperties: s.json() },
  ),
);
