import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the encryption encoding format used to encrypt the data.
 *
 *      * `BINARY` - Indicates data is binary encoded.
 *      * `ASCII` - Indicates data is encoded as ASCII.
 */
export const TypeInstallmentsPaymentMethodEncryptionType = {
  Binary: "BINARY",
  Ascii: "ASCII",
} as const;
export type TypeInstallmentsPaymentMethodEncryptionType =
  | (typeof TypeInstallmentsPaymentMethodEncryptionType)[keyof typeof TypeInstallmentsPaymentMethodEncryptionType]
  | (string & {});

export const typeInstallmentsPaymentMethodEncryptionTypeSchema: EnumSchema<TypeInstallmentsPaymentMethodEncryptionType> =
  s.enumOf<TypeInstallmentsPaymentMethodEncryptionType>(TypeInstallmentsPaymentMethodEncryptionType);
