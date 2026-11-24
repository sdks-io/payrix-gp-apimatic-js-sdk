import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodsInternalSchema,
  paymentMethodsSchema,
  type PaymentMethods,
} from "./payment-methods.js";

export type CreateRequest4 = {
  /** The first name of the Payer */
  firstName?: string;
  /** The last name of the Payer */
  lastName?: string;
  /** This is a label set by the integrator to identify the Payer */
  reference?: string;
  paymentMethods?: PaymentMethods[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequest4Properties: s.Shape<CreateRequest4> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  reference: s.optional(s.string()),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethodsInternalSchema))),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    paymentMethods: "payment_methods",
  },
};

export const createRequest4InternalSchema: Schema<CreateRequest4> = s.object<CreateRequest4>(
  createRequest4Properties,
  { additionalProperties: s.json() },
);

export const createRequest4Schema: Schema<CreateRequest4> = s.lazySchema(() =>
  s.object<CreateRequest4>(
    {
      ...createRequest4Properties,
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethodsSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
