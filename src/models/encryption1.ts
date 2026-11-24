import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  methodTransactionsPaymentMethodEncryptionMethodSchema,
  type MethodTransactionsPaymentMethodEncryptionMethod,
} from "./method-transactions-payment-method-encryption-method.js";
import {
  typeTransactionsPaymentMethodEncryptionTypeSchema,
  type TypeTransactionsPaymentMethodEncryptionType,
} from "./type-transactions-payment-method-encryption-type.js";

export type Encryption1 = {
  /**
   * Indicates the encryption method used when sending encrypted card data. *`KTB` - Indicates Key
   * Transmission Block is being used *`KSN` - Indicates Key Serial Number is being used
   * *`RSA_2048_OAEP_SHA_512` - Indicates RSA algorithm is being used with OAEP SHA 512 padding.
   */
  method?: MethodTransactionsPaymentMethodEncryptionMethod;
  /**
   * The version of encryption being used. It is in the form of a two digit value. For example 05 or
   * 06.
   */
  version?: string;
  /**
   * The encryption key id info used when sending encrypted data. If encryption.method is *`KTB`
   * then it is the Key Transmission Block key id value, *`KSN` then it is the Key Serial Number key
   * id value, *`RSA` then it is the RSA key id value base64 encoded.
   */
  info?: string;
  /**
   * Indicates the encryption encoding format used to encrypt the data. *`BINARY` - Indicates data
   * is binary encoded. *`ASCII` - Indicates data is encoded as ASCII.
   */
  type?: TypeTransactionsPaymentMethodEncryptionType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const encryption1Properties: s.Shape<Encryption1> = {
  method: s.optional(s.lazy(() => methodTransactionsPaymentMethodEncryptionMethodSchema)),
  version: s.optional(s.string()),
  info: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeTransactionsPaymentMethodEncryptionTypeSchema)),
};

export const encryption1InternalSchema: Schema<Encryption1> = s.object<Encryption1>(encryption1Properties, {
  additionalProperties: s.json(),
});

export const encryption1Schema: Schema<Encryption1> = s.lazySchema(() =>
  s.object<Encryption1>(
    {
      ...encryption1Properties,
      version: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      info: s.optional(s.string().check(s.minLength(1), s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
