import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the encryption encoding format used to encrypt the data. *`BINARY` - Indicates data is
 * binary encoded. *`ASCII` - Indicates data is encoded as ASCII.
 */
export const TypeVerificationsPaymentMethodEncryptionType = {
  Binary: "BINARY",
  Ascii: "ASCII",
} as const;
export type TypeVerificationsPaymentMethodEncryptionType =
  | (typeof TypeVerificationsPaymentMethodEncryptionType)[keyof typeof TypeVerificationsPaymentMethodEncryptionType]
  | (string & {});

export const typeVerificationsPaymentMethodEncryptionTypeSchema: EnumSchema<TypeVerificationsPaymentMethodEncryptionType> =
  s.enumOf<TypeVerificationsPaymentMethodEncryptionType>(TypeVerificationsPaymentMethodEncryptionType);
