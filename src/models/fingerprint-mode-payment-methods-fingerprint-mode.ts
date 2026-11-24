import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether to execute the fingerprint signature functionality.
 * * `ALWAYS` - Always check and create the fingerprint value regardless of the result of the card
 *   authorization.
 * * `ON_SUCCESS` - Always check and create the fingerprint value when the card authorization is
 *   successful.
 */
export const FingerprintModePaymentMethodsFingerprintMode = {
  Always: "ALWAYS",
  OnSuccess: "ON_SUCCESS",
} as const;
export type FingerprintModePaymentMethodsFingerprintMode =
  | (typeof FingerprintModePaymentMethodsFingerprintMode)[keyof typeof FingerprintModePaymentMethodsFingerprintMode]
  | (string & {});

export const fingerprintModePaymentMethodsFingerprintModeSchema: EnumSchema<FingerprintModePaymentMethodsFingerprintMode> =
  s.enumOf<FingerprintModePaymentMethodsFingerprintMode>(FingerprintModePaymentMethodsFingerprintMode);
