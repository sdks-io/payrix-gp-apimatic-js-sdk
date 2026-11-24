import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeInstallmentsPaymentMethodEncryptionTypeSchema,
  type TypeInstallmentsPaymentMethodEncryptionType,
} from "./type-installments-payment-method-encryption-type.js";

export type Encryption = {
  /** The encryption method used when sending encrypted card data to Global Payments. */
  method?: string;
  /** The version of encryption being used. */
  version?: string;
  /** The encryption info used when sending encrypted card data to Global Payments. */
  info?: string;
  /**
   * Indicates the encryption encoding format used to encrypt the data.
   *
   *      * `BINARY` - Indicates data is binary encoded.
   *      * `ASCII` - Indicates data is encoded as ASCII.
   */
  type?: TypeInstallmentsPaymentMethodEncryptionType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const encryptionProperties: s.Shape<Encryption> = {
  method: s.optional(s.string()),
  version: s.optional(s.string()),
  info: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeInstallmentsPaymentMethodEncryptionTypeSchema)),
};

export const encryptionInternalSchema: Schema<Encryption> = s.object<Encryption>(encryptionProperties, {
  additionalProperties: s.json(),
});

export const encryptionSchema: Schema<Encryption> = s.lazySchema(() =>
  s.object<Encryption>(
    {
      ...encryptionProperties,
      method: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      version: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      info: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
