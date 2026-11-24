import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SchemaObjectsV1MerchantPaymentMethodCard = {
  /** The card account number used to authorize the transaction. Also known as PAN. */
  number: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const schemaObjectsV1MerchantPaymentMethodCardProperties: s.Shape<SchemaObjectsV1MerchantPaymentMethodCard> =
  {
    number: s.string(),
    expiryMonth: s.string(),
    expiryYear: s.string(),
    _keysMap: {
      expiryMonth: "expiry_month",
      expiryYear: "expiry_year",
    },
  };

export const schemaObjectsV1MerchantPaymentMethodCardInternalSchema: Schema<SchemaObjectsV1MerchantPaymentMethodCard> =
  s.object<SchemaObjectsV1MerchantPaymentMethodCard>(schemaObjectsV1MerchantPaymentMethodCardProperties, {
    additionalProperties: s.json(),
  });

export const schemaObjectsV1MerchantPaymentMethodCardSchema: Schema<SchemaObjectsV1MerchantPaymentMethodCard> =
  s.lazySchema(() =>
    s.object<SchemaObjectsV1MerchantPaymentMethodCard>(
      {
        ...schemaObjectsV1MerchantPaymentMethodCardProperties,
        number: s.string().check(s.minLength(1), s.maxLength(50)),
        expiryMonth: s.string().check(s.minLength(2), s.maxLength(2)),
        expiryYear: s.string().check(s.minLength(2), s.maxLength(2)),
      },
      { additionalProperties: s.json() },
    ),
  );
