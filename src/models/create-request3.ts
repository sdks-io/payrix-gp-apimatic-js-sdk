import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethod32InternalSchema,
  paymentMethod32Schema,
  type PaymentMethod32,
} from "./payment-method32.js";

export type CreateRequest3 = {
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
  paymentMethods?: PaymentMethod32[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequest3Properties: s.Shape<CreateRequest3> = {
  firstName: s.string(),
  lastName: s.string(),
  reference: s.optional(s.string()),
  email: s.optional(s.string()),
  language: s.optional(s.string()),
  paymentMethods: s.optional(s.array(s.lazy(() => paymentMethod32InternalSchema))),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    paymentMethods: "payment_methods",
  },
};

export const createRequest3InternalSchema: Schema<CreateRequest3> = s.object<CreateRequest3>(
  createRequest3Properties,
  { additionalProperties: s.json() },
);

export const createRequest3Schema: Schema<CreateRequest3> = s.lazySchema(() =>
  s.object<CreateRequest3>(
    {
      ...createRequest3Properties,
      firstName: s.string().check(s.minLength(1), s.maxLength(50)),
      lastName: s.string().check(s.minLength(1), s.maxLength(50)),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethods: s.optional(s.array(s.lazy(() => paymentMethod32Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
