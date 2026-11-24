import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodsInternalSchema,
  paymentMethodsSchema,
  type PaymentMethods,
} from "./payment-methods.js";

export type CreateRequest1 = {
  /** The first name of the Payer */
  firstName: string;
  /** The last name of the Payer */
  lastName: string;
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequest1Properties: s.Shape<CreateRequest1> = {
  firstName: s.string(),
  lastName: s.string(),
  reference: s.optional(s.string()),
  email: s.optional(s.string()),
  language: s.optional(s.string()),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethodsInternalSchema))),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    paymentMethods: "payment_methods",
  },
};

export const createRequest1InternalSchema: Schema<CreateRequest1> = s.object<CreateRequest1>(
  createRequest1Properties,
  { additionalProperties: s.json() },
);

export const createRequest1Schema: Schema<CreateRequest1> = s.lazySchema(() =>
  s.object<CreateRequest1>(
    {
      ...createRequest1Properties,
      firstName: s.string().check(s.minLength(1), s.maxLength(50)),
      lastName: s.string().check(s.minLength(1), s.maxLength(50)),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethodsSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
