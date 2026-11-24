import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import { card22InternalSchema, card22Schema, type Card22 } from "./card22.js";
import { transaction5InternalSchema, transaction5Schema, type Transaction5 } from "./transaction5.js";

export type GenerateCryptogramResponse4 = {
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

const generateCryptogramResponse4Properties: s.Shape<GenerateCryptogramResponse4> = {
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

export const generateCryptogramResponse4InternalSchema: Schema<GenerateCryptogramResponse4> =
  s.object<GenerateCryptogramResponse4>(generateCryptogramResponse4Properties, {
    additionalProperties: s.json(),
  });

export const generateCryptogramResponse4Schema: Schema<GenerateCryptogramResponse4> = s.lazySchema(() =>
  s.object<GenerateCryptogramResponse4>(
    {
      ...generateCryptogramResponse4Properties,
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
