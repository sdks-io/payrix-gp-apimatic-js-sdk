import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether to execute the fingerprint signature functionality. *`ALWAYS` - Always check
 * and create the fingerprint value regardless of the result of the card authorization.
 * *`ON_SUCCESS` - Always check and create the fingerprint value when the card authorization is
 * successful.
 */
export const FingerprintModeVerificationsPaymentMethodFingerprintMode = {
  Always: "ALWAYS",
  OnSuccess: "ON_SUCCESS",
} as const;
export type FingerprintModeVerificationsPaymentMethodFingerprintMode =
  | (typeof FingerprintModeVerificationsPaymentMethodFingerprintMode)[keyof typeof FingerprintModeVerificationsPaymentMethodFingerprintMode]
  | (string & {});

export const fingerprintModeVerificationsPaymentMethodFingerprintModeSchema: EnumSchema<FingerprintModeVerificationsPaymentMethodFingerprintMode> =
  s.enumOf<FingerprintModeVerificationsPaymentMethodFingerprintMode>(
    FingerprintModeVerificationsPaymentMethodFingerprintMode,
  );
