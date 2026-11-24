import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the encryption method used when sending encrypted card data. *`KTB` - Indicates Key
 * Transmission Block is being used *`KSN` - Indicates Key Serial Number is being used
 * *`RSA_2048_OAEP_SHA_512` - Indicates RSA algorithm is being used with OAEP SHA 512 padding.
 */
export const MethodVerificationsPaymentMethodEncryptionMethod = {
  Ktb: "KTB",
  Ksn: "KSN",
  Rsa2048OaepSha512: "RSA_2048_OAEP_SHA_512",
} as const;
export type MethodVerificationsPaymentMethodEncryptionMethod =
  | (typeof MethodVerificationsPaymentMethodEncryptionMethod)[keyof typeof MethodVerificationsPaymentMethodEncryptionMethod]
  | (string & {});

export const methodVerificationsPaymentMethodEncryptionMethodSchema: EnumSchema<MethodVerificationsPaymentMethodEncryptionMethod> =
  s.enumOf<MethodVerificationsPaymentMethodEncryptionMethod>(
    MethodVerificationsPaymentMethodEncryptionMethod,
  );
