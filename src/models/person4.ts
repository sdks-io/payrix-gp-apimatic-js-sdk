import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address6InternalSchema, address6Schema, type Address6 } from "./address6.js";
import { contactPhoneInternalSchema, contactPhoneSchema, type ContactPhone } from "./contact-phone.js";
import { functions5Schema, type Functions5 } from "./functions5.js";
import { workPhone2InternalSchema, workPhone2Schema, type WorkPhone2 } from "./work-phone2.js";

export type Person4 = {
  /**
   * Describes the functions that a person can have in a merchant's organization.
   *   * `APPLICANT` - The person who is applying to Global Payments or payment processing services.
   *   * `BENEFICIAL_OWNER` - An owner of the company with 25% or more stake in a company.
   *   * `PAYMENT_METHOD_OWNER` - The person who owns the payment methods used to transfer funds
   *     from the Global Payments merchant account to the funds management payment methods.
   */
  functions?: Functions5[];
  /** The first name of the person */
  firstName?: string;
  /** The middle initial of the person */
  middleName?: string;
  /** The last name of the person. */
  lastName?: string;
  /** Email address of the person */
  email?: string;
  /** The date of birth of the person */
  dateOfBirth?: string;
  /**
   * The national id number or reference for the person for their nationality. For example for
   * Americans this would be SSN, for Canadians it would be the SIN, for Britains it would be the
   * NIN.
   */
  nationalIdReference?: string;
  /** The job title the person has */
  jobTitle?: string;
  /**
   * The equity percentage the person owns of the business that is applying to Global Payments for
   * payment processing services.
   */
  equityPercentage?: string;
  /** The country of birth of the person referenced in ISO-3166-1(alpha-2 code) format. */
  birthCountry?: string;
  /**
   * The country or countries where the applicant has citizenship in ISO-3166-1(alpha-2 code)
   * format.
   */
  citizenshipCountry?: string;
  address?: Address6;
  contactPhone?: ContactPhone;
  workPhone?: WorkPhone2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const person4Properties: s.Shape<Person4> = {
  functions: s.optional(s.array(s.lazy(() => functions5Schema))),
  firstName: s.optional(s.string()),
  middleName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  dateOfBirth: s.optional(s.string()),
  nationalIdReference: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  equityPercentage: s.optional(s.string()),
  birthCountry: s.optional(s.string()),
  citizenshipCountry: s.optional(s.string()),
  address: s.optional(s.lazy(() => address6InternalSchema)),
  contactPhone: s.optional(s.lazy(() => contactPhoneInternalSchema)),
  workPhone: s.optional(s.lazy(() => workPhone2InternalSchema)),
  _keysMap: {
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    dateOfBirth: "date_of_birth",
    nationalIdReference: "national_id_reference",
    jobTitle: "job_title",
    equityPercentage: "equity_percentage",
    birthCountry: "birth_country",
    citizenshipCountry: "citizenship_country",
    contactPhone: "contact_phone",
    workPhone: "work_phone",
  },
};

export const person4InternalSchema: Schema<Person4> = s.object<Person4>(person4Properties, {
  additionalProperties: s.json(),
});

export const person4Schema: Schema<Person4> = s.lazySchema(() =>
  s.object<Person4>(
    {
      ...person4Properties,
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      middleName: s.optional(s.string().check(s.maxLength(1))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dateOfBirth: s.optional(s.string().check(s.minLength(10), s.maxLength(100))),
      nationalIdReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      jobTitle: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      equityPercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(3))),
      address: s.optional(s.lazy(() => address6Schema)),
      contactPhone: s.optional(s.lazy(() => contactPhoneSchema)),
      workPhone: s.optional(s.lazy(() => workPhone2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
