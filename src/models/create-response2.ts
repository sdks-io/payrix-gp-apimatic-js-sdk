import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import {
  AutoUpdaterPaymentMethodsAutoUpdater,
  autoUpdaterPaymentMethodsAutoUpdaterSchema,
} from "./auto-updater-payment-methods-auto-updater.js";
import { card20InternalSchema, card20Schema, type Card20 } from "./card20.js";
import {
  fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
  type FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator,
} from "./fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.js";
import { payer4InternalSchema, payer4Schema, type Payer4 } from "./payer4.js";
import {
  UsageModePaymentMethodsUsageMode,
  usageModePaymentMethodsUsageModeSchema,
} from "./usage-mode-payment-methods-usage-mode.js";

export type CreateResponse2 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** Global Payments time indicating when the object was created in ISO-8601 format */
  timeCreated?: Date;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /**
   * If enabled, this field indicates whether the payment method has been seen before or is new.
   * * `EXISTS` - Indicates that the payment method was seen on the platform before by this
   *   merchant.
   * * `NEW` - Indicates that the payment method was not seen on the platform before by this
   *   merchant.
   */
  fingerprintPresenceIndicator?: FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator;
  /**
   * If enabled, this field contains the unique fingerprint signature for that payment method for
   * that merchant. If the payment method is seen again this same value is generated. For cards the
   * primary account number is checked only. The expiry date or the CVV is not used for this check.
   */
  fingerprint?: string;
  /** Merchant defined field to uniquely reference the stored payment method. */
  reference?: string;
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
  card?: Card20;
  action?: Action48;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createResponse2Properties: s.Shape<CreateResponse2> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  fingerprintPresenceIndicator: s.optional(
    s.lazy(() => fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema),
  ),
  fingerprint: s.optional(s.string()),
  reference: s.optional(s.string()),
  usageMode: s.defaulted(usageModePaymentMethodsUsageModeSchema, UsageModePaymentMethodsUsageMode.Multiple),
  name: s.optional(s.string()),
  autoUpdater: s.defaulted(
    autoUpdaterPaymentMethodsAutoUpdaterSchema,
    AutoUpdaterPaymentMethodsAutoUpdater.Disable,
  ),
  payer: s.optional(s.lazy(() => payer4InternalSchema)),
  card: s.optional(s.lazy(() => card20InternalSchema)),
  action: s.optional(s.lazy(() => action48Schema)),
  _keysMap: {
    timeCreated: "time_created",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    fingerprintPresenceIndicator: "fingerprint_presence_indicator",
    usageMode: "usage_mode",
    autoUpdater: "auto_updater",
  },
};

export const createResponse2InternalSchema: Schema<CreateResponse2> = s.object<CreateResponse2>(
  createResponse2Properties,
  { additionalProperties: s.json() },
);

export const createResponse2Schema: Schema<CreateResponse2> = s.lazySchema(() =>
  s.object<CreateResponse2>(
    {
      ...createResponse2Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      fingerprint: s.optional(s.string().check(s.maxLength(256))),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      name: s.optional(s.string().check(s.maxLength(100))),
      payer: s.optional(s.lazy(() => payer4Schema)),
      card: s.optional(s.lazy(() => card20Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
