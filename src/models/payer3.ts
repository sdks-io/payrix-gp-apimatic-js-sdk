import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodsInternalSchema,
  paymentMethodsSchema,
  type PaymentMethods,
} from "./payment-methods.js";

export type Payer3 = {
  /** Unique identifier for the Payer on the platform. */
  id?: string;
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
  paymentMethods?: PaymentMethods;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer3Properties: s.Shape<Payer3> = {
  id: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  reference: s.optional(s.string()),
  email: s.optional(s.string()),
  language: s.optional(s.string()),
  paymentMethods: s.optional(s.lazy(() => paymentMethodsInternalSchema)),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    paymentMethods: "payment_methods",
  },
};

export const payer3InternalSchema: Schema<Payer3> = s.object<Payer3>(payer3Properties, {
  additionalProperties: s.json(),
});

export const payer3Schema: Schema<Payer3> = s.lazySchema(() =>
  s.object<Payer3>(
    {
      ...payer3Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethods: s.optional(s.lazy(() => paymentMethodsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
