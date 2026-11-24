import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import {
  AutoUpdaterPaymentMethodsAutoUpdater,
  autoUpdaterPaymentMethodsAutoUpdaterSchema,
} from "./auto-updater-payment-methods-auto-updater.js";
import { card27InternalSchema, card27Schema, type Card27 } from "./card27.js";
import {
  fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
  type FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator,
} from "./fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.js";
import {
  statusPaymentMethodsStatusSchema,
  type StatusPaymentMethodsStatus,
} from "./status-payment-methods-status.js";
import {
  UsageModePaymentMethodsUsageMode,
  usageModePaymentMethodsUsageModeSchema,
} from "./usage-mode-payment-methods-usage-mode.js";

export type PatchResponse2 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /**
   * The overall status of the payment method.
   * * `ACTIVE` - The entity is ACTIVE and can be used.
   * * `INACTIVE` - The entity is INACTIVE and cannot be used."
   * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
   *   resource has been removed from the platform.
   */
  status?: StatusPaymentMethodsStatus;
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
  card?: Card27;
  action?: Action48;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const patchResponse2Properties: s.Shape<PatchResponse2> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusPaymentMethodsStatusSchema)),
  fingerprintPresenceIndicator: s.optional(
    s.lazy(() => fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema),
  ),
  fingerprint: s.optional(s.string()),
  usageMode: s.defaulted(usageModePaymentMethodsUsageModeSchema, UsageModePaymentMethodsUsageMode.Multiple),
  name: s.optional(s.string()),
  autoUpdater: s.defaulted(
    autoUpdaterPaymentMethodsAutoUpdaterSchema,
    AutoUpdaterPaymentMethodsAutoUpdater.Disable,
  ),
  card: s.optional(s.lazy(() => card27InternalSchema)),
  action: s.optional(s.lazy(() => action48Schema)),
  _keysMap: {
    fingerprintPresenceIndicator: "fingerprint_presence_indicator",
    usageMode: "usage_mode",
    autoUpdater: "auto_updater",
  },
};

export const patchResponse2InternalSchema: Schema<PatchResponse2> = s.object<PatchResponse2>(
  patchResponse2Properties,
  { additionalProperties: s.json() },
);

export const patchResponse2Schema: Schema<PatchResponse2> = s.lazySchema(() =>
  s.object<PatchResponse2>(
    {
      ...patchResponse2Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      fingerprint: s.optional(s.string().check(s.maxLength(256))),
      name: s.optional(s.string().check(s.maxLength(100))),
      card: s.optional(s.lazy(() => card27Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
