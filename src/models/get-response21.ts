import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import { card25InternalSchema, card25Schema, type Card25 } from "./card25.js";
import {
  statusPaymentMethodsStatusSchema,
  type StatusPaymentMethodsStatus,
} from "./status-payment-methods-status.js";

export type GetResponse21 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** Global Payments time indicating when the object was created in ISO-8601 format */
  timeCreated?: Date;
  /**
   * The overall status of the payment method.
   * * `ACTIVE` - The entity is ACTIVE and can be used.
   * * `INACTIVE` - The entity is INACTIVE and cannot be used."
   * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
   *   resource has been removed from the platform.
   */
  status?: StatusPaymentMethodsStatus;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** Merchant defined field to uniquely reference the stored payment method. */
  reference?: string;
  /** The name of the owner of the payment method. For example the cardholder's name. */
  name?: string;
  card?: Card25;
  action?: Action48;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const getResponse21Properties: s.Shape<GetResponse21> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusPaymentMethodsStatusSchema)),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  reference: s.optional(s.string()),
  name: s.optional(s.string()),
  card: s.optional(s.lazy(() => card25InternalSchema)),
  action: s.optional(s.lazy(() => action48Schema)),
  _keysMap: {
    timeCreated: "time_created",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const getResponse21InternalSchema: Schema<GetResponse21> = s.object<GetResponse21>(
  getResponse21Properties,
  { additionalProperties: s.json() },
);

export const getResponse21Schema: Schema<GetResponse21> = s.lazySchema(() =>
  s.object<GetResponse21>(
    {
      ...getResponse21Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      name: s.optional(s.string().check(s.maxLength(100))),
      card: s.optional(s.lazy(() => card25Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
