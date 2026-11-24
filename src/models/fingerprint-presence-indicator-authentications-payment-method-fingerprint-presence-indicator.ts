import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If enabled, this field indicates whether the payment method has been seen before or is new.
 * * `EXISTS` - Indicates that the payment method was seen on the platform before by this merchant.
 * * `NEW` - Indicates that the payment method was not seen on the platform before by this merchant.
 */
export const FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator = {
  New: "NEW",
  Exists: "EXISTS",
} as const;
export type FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator =
  | (typeof FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator)[keyof typeof FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator]
  | (string & {});

export const fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema: EnumSchema<FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator> =
  s.enumOf<FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator>(
    FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator,
  );
