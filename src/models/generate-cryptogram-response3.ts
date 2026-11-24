import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import { card22InternalSchema, card22Schema, type Card22 } from "./card22.js";
import { transaction5InternalSchema, transaction5Schema, type Transaction5 } from "./transaction5.js";

export type GenerateCryptogramResponse3 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** Global Payments time indicating when the object was created in ISO-8601 format */
  timeCreated?: Date;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  transaction?: Transaction5;
  card?: Card22;
  action?: Action48;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const generateCryptogramResponse3Properties: s.Shape<GenerateCryptogramResponse3> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  transaction: s.optional(s.lazy(() => transaction5InternalSchema)),
  card: s.optional(s.lazy(() => card22InternalSchema)),
  action: s.optional(s.lazy(() => action48Schema)),
  _keysMap: {
    timeCreated: "time_created",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const generateCryptogramResponse3InternalSchema: Schema<GenerateCryptogramResponse3> =
  s.object<GenerateCryptogramResponse3>(generateCryptogramResponse3Properties, {
    additionalProperties: s.json(),
  });

export const generateCryptogramResponse3Schema: Schema<GenerateCryptogramResponse3> = s.lazySchema(() =>
  s.object<GenerateCryptogramResponse3>(
    {
      ...generateCryptogramResponse3Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      transaction: s.optional(s.lazy(() => transaction5Schema)),
      card: s.optional(s.lazy(() => card22Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
