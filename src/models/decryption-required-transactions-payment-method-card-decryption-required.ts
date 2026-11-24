import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether Global Payments must decrypt the merchant’s encrypted data to process the
 * transaction.
 */
export const DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired = {
  Yes: "YES",
  No: "NO",
} as const;
export type DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired =
  | (typeof DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired)[keyof typeof DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired]
  | (string & {});

export const decryptionRequiredTransactionsPaymentMethodCardDecryptionRequiredSchema: EnumSchema<DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired> =
  s.enumOf<DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired>(
    DecryptionRequiredTransactionsPaymentMethodCardDecryptionRequired,
  );
