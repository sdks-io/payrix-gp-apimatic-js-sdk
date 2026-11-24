import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address5InternalSchema, address5Schema, type Address5 } from "./address5.js";
import { function3Schema, type Function3 } from "./function3.js";

export type Person = {
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
  /** The date of birth of the person */
  dateOfBirth?: string;
  /** The job title the person has */
  jobTitle?: string;
  /**
   * The equity percentage the person owns of the business that is applying to Global Payments for
   * payment processing services.
   */
  equityPercentage?: string;
  /**
   * The national id number or reference for the person for their nationality. For example for
   * Americans this would be SSN, for Canadians it would be the SIN, for Britains it would be the
   * NIN.
   */
  nationalIdReference?: string;
  /** The country of birth of the person referenced in ISO-3166-1(alpha-2 code) format. */
  birthCountry?: string;
  /**
   * The country or countries where the applicant has citizenship in ISO-3166-1(alpha-2 code)
   * format.
   */
  citizenshipCountry?: string;
  addresses?: Address5[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const personProperties: s.Shape<Person> = {
  functions: s.optional(s.array(s.lazy(() => function3Schema))),
  firstName: s.optional(s.string()),
  middleName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  dateOfBirth: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  equityPercentage: s.optional(s.string()),
  nationalIdReference: s.optional(s.string()),
  birthCountry: s.optional(s.string()),
  citizenshipCountry: s.optional(s.string()),
  addresses: s.optional(s.array(s.lazy(() => address5InternalSchema))),
  _keysMap: {
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    dateOfBirth: "date_of_birth",
    jobTitle: "job_title",
    equityPercentage: "equity_percentage",
    nationalIdReference: "national_id_reference",
    birthCountry: "birth_country",
    citizenshipCountry: "citizenship_country",
  },
};

export const personInternalSchema: Schema<Person> = s.object<Person>(personProperties, {
  additionalProperties: s.json(),
});

export const personSchema: Schema<Person> = s.lazySchema(() =>
  s.object<Person>(
    {
      ...personProperties,
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      middleName: s.optional(s.string().check(s.maxLength(1))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dateOfBirth: s.optional(s.string().check(s.minLength(10), s.maxLength(100))),
      jobTitle: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      equityPercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(3))),
      nationalIdReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      addresses: s.optional(s.array(s.lazy(() => address5Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
