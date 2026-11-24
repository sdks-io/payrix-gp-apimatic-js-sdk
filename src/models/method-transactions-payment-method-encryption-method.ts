import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the encryption method used when sending encrypted card data. *`KTB` - Indicates Key
 * Transmission Block is being used *`KSN` - Indicates Key Serial Number is being used
 * *`RSA_2048_OAEP_SHA_512` - Indicates RSA algorithm is being used with OAEP SHA 512 padding.
 */
export const MethodTransactionsPaymentMethodEncryptionMethod = {
  Ktb: "KTB",
  Ksn: "KSN",
  Rsa2048OaepSha512: "RSA_2048_OAEP_SHA_512",
} as const;
export type MethodTransactionsPaymentMethodEncryptionMethod =
  | (typeof MethodTransactionsPaymentMethodEncryptionMethod)[keyof typeof MethodTransactionsPaymentMethodEncryptionMethod]
  | (string & {});

export const methodTransactionsPaymentMethodEncryptionMethodSchema: EnumSchema<MethodTransactionsPaymentMethodEncryptionMethod> =
  s.enumOf<MethodTransactionsPaymentMethodEncryptionMethod>(MethodTransactionsPaymentMethodEncryptionMethod);
