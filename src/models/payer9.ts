import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingAddress2InternalSchema,
  billingAddress2Schema,
  type BillingAddress2,
} from "./billing-address2.js";
import { homePhone1InternalSchema, homePhone1Schema, type HomePhone1 } from "./home-phone1.js";
import { workPhone4InternalSchema, workPhone4Schema, type WorkPhone4 } from "./work-phone4.js";

export type Payer9 = {
  /** The first name of the Payer */
  firstName?: string;
  /** The last name of the Payer */
  lastName?: string;
  /** The full name of the payer. */
  name?: string;
  /** An integrator's reference to the payer. */
  reference?: string;
  /** The email address of the payer. */
  email?: string;
  /** The mobile phone number. */
  mobilePhone?: string;
  homePhone?: HomePhone1;
  workPhone?: WorkPhone4;
  /** The date of birth of the payer */
  dateOfBirth?: string;
  billingAddress?: BillingAddress2;
  /** The landline phone number. */
  landlinePhone?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer9Properties: s.Shape<Payer9> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  name: s.optional(s.string()),
  reference: s.optional(s.string()),
  email: s.optional(s.string()),
  mobilePhone: s.optional(s.string()),
  homePhone: s.optional(s.lazy(() => homePhone1InternalSchema)),
  workPhone: s.optional(s.lazy(() => workPhone4InternalSchema)),
  dateOfBirth: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddress2InternalSchema)),
  landlinePhone: s.optional(s.string()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    mobilePhone: "mobile_phone",
    homePhone: "home_phone",
    workPhone: "work_phone",
    dateOfBirth: "date_of_birth",
    billingAddress: "billing_address",
    landlinePhone: "landline_phone",
  },
};

export const payer9InternalSchema: Schema<Payer9> = s.object<Payer9>(payer9Properties, {
  additionalProperties: s.json(),
});

export const payer9Schema: Schema<Payer9> = s.lazySchema(() =>
  s.object<Payer9>(
    {
      ...payer9Properties,
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      homePhone: s.optional(s.lazy(() => homePhone1Schema)),
      workPhone: s.optional(s.lazy(() => workPhone4Schema)),
      billingAddress: s.optional(s.lazy(() => billingAddress2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
