import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address6InternalSchema, address6Schema, type Address6 } from "./address6.js";
import { contactPhoneInternalSchema, contactPhoneSchema, type ContactPhone } from "./contact-phone.js";
import { function3Schema, type Function3 } from "./function3.js";
import { workPhone2InternalSchema, workPhone2Schema, type WorkPhone2 } from "./work-phone2.js";

export type Person2 = {
  /**
   * Describes the functions that a person can have in a merchant's organization.
   *   * `APPLICANT` - The person who is applying to Global Payments or payment processing services.
   *   * `BENEFICIAL_OWNER` - An owner of the company with 25% or more stake in a company.
   *   * `PAYMENT_METHOD_OWNER` - The person who owns the payment methods used to transfer funds
   *     from the Global Payments merchant account to the funds management payment methods.
   */
  functions?: Function3[];
  /** The first name of the person */
  firstName?: string;
  /** The middle initial of the person */
  middleName?: string;
  /** The last name of the person. */
  lastName?: string;
  /** Email address of the person */
  email?: string;
  address?: Address6;
  contactPhone?: ContactPhone;
  workPhone?: WorkPhone2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const person2Properties: s.Shape<Person2> = {
  functions: s.optional(s.array(s.lazy(() => function3Schema))),
  firstName: s.optional(s.string()),
  middleName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  address: s.optional(s.lazy(() => address6InternalSchema)),
  contactPhone: s.optional(s.lazy(() => contactPhoneInternalSchema)),
  workPhone: s.optional(s.lazy(() => workPhone2InternalSchema)),
  _keysMap: {
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    contactPhone: "contact_phone",
    workPhone: "work_phone",
  },
};

export const person2InternalSchema: Schema<Person2> = s.object<Person2>(person2Properties, {
  additionalProperties: s.json(),
});

export const person2Schema: Schema<Person2> = s.lazySchema(() =>
  s.object<Person2>(
    {
      ...person2Properties,
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      middleName: s.optional(s.string().check(s.maxLength(1))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      address: s.optional(s.lazy(() => address6Schema)),
      contactPhone: s.optional(s.lazy(() => contactPhoneSchema)),
      workPhone: s.optional(s.lazy(() => workPhone2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
