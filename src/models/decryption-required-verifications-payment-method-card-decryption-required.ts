import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether Global Payments must decrypt the merchant’s encrypted data to process the
 * transaction.
 */
export const DecryptionRequiredVerificationsPaymentMethodCardDecryptionRequired = {
  Yes: "YES",
  No: "NO",
} as const;
export type DecryptionRequiredVerificationsPaymentMethodCardDecryptionRequired =
  | (typeof DecryptionRequiredVerificationsPaymentMethodCardDecryptionRequired)[keyof typeof DecryptionRequiredVerificationsPaymentMethodCardDecryptionRequired]
  | (string & {});

export const decryptionRequiredVerificationsPaymentMethodCardDecryptionRequiredSchema: EnumSchema<DecryptionRequiredVerificationsPaymentMethodCardDecryptionRequired> =
  s.enumOf<DecryptionRequiredVerificationsPaymentMethodCardDecryptionRequired>(
    DecryptionRequiredVerificationsPaymentMethodCardDecryptionRequired,
  );
