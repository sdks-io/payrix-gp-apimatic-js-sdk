import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action46Schema, type Action46 } from "./action46.js";
import {
  paymentMethodsInternalSchema,
  paymentMethodsSchema,
  type PaymentMethods,
} from "./payment-methods.js";

export type CreateResponse1 = {
  /** Unique identifier for the Payer on the platform. */
  id?: string;
  /** Time indicating when the object was created in ISO-8601 format. */
  timeCreated?: Date;
  /** Global Payments time indicating when the object was last updated in ISO-8601 format. */
  timeLastUpdated?: Date;
  /** A unique identifier for the merchant account set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** A unique identifier for the merchant set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** The first name of the Payer */
  firstName?: string;
  /** The last name of the Payer */
  lastName?: string;
  /** This is a label set by the integrator to identify the Payer */
  reference?: string;
  /** The email address of the payer. */
  email?: string;
  /**
   * The preferred language of the payer. In the format ISO-639-1 (alpha-2) or ISO-639-1
   * (alpha-2)_ISO-3166(alpha-2)
   */
  language?: string;
  paymentMethods?: PaymentMethods[];
  action?: Action46;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createResponse1Properties: s.Shape<CreateResponse1> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  timeLastUpdated: s.optional(s.dateTime()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  reference: s.optional(s.string()),
  email: s.optional(s.string()),
  language: s.optional(s.string()),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethodsInternalSchema))),
  action: s.optional(s.lazy(() => action46Schema)),
  _keysMap: {
    timeCreated: "time_created",
    timeLastUpdated: "time_last_updated",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    firstName: "first_name",
    lastName: "last_name",
    paymentMethods: "payment_methods",
  },
};

export const createResponse1InternalSchema: Schema<CreateResponse1> = s.object<CreateResponse1>(
  createResponse1Properties,
  { additionalProperties: s.json() },
);

export const createResponse1Schema: Schema<CreateResponse1> = s.lazySchema(() =>
  s.object<CreateResponse1>(
    {
      ...createResponse1Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethodsSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
