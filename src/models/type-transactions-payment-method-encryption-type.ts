import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the encryption encoding format used to encrypt the data. *`BINARY` - Indicates data is
 * binary encoded. *`ASCII` - Indicates data is encoded as ASCII.
 */
export const TypeTransactionsPaymentMethodEncryptionType = {
  Binary: "BINARY",
  Ascii: "ASCII",
} as const;
export type TypeTransactionsPaymentMethodEncryptionType =
  | (typeof TypeTransactionsPaymentMethodEncryptionType)[keyof typeof TypeTransactionsPaymentMethodEncryptionType]
  | (string & {});

export const typeTransactionsPaymentMethodEncryptionTypeSchema: EnumSchema<TypeTransactionsPaymentMethodEncryptionType> =
  s.enumOf<TypeTransactionsPaymentMethodEncryptionType>(TypeTransactionsPaymentMethodEncryptionType);
