import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If enabled, this field indicates whether the payment method has been seen before or is new.
 * * `EXISTS` - Indicates that the payment method was seen on the platform before by this merchant.
 * * `NEW` - Indicates that the payment method was not seen on the platform before by this merchant.
 */
export const FingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicator = {
  New: "NEW",
  Exists: "EXISTS",
} as const;
export type FingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicator =
  | (typeof FingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicator)[keyof typeof FingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicator]
  | (string & {});

export const fingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicatorSchema: EnumSchema<FingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicator> =
  s.enumOf<FingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicator>(
    FingerprintPresenceIndicatorPaymentMethodsFingerprintPresenceIndicator,
  );
