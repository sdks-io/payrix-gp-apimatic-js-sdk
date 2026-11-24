import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactPhone5InternalSchema, contactPhone5Schema, type ContactPhone5 } from "./contact-phone5.js";
import {
  functionsOrdersAddressesFunctionsSchema,
  type FunctionsOrdersAddressesFunctions,
} from "./functions-orders-addresses-functions.js";

export type Addresses = {
  /**
   * Describes the functions that an address can have.
   *        * BUSINESS - The business address of the merchant.
   *        * SHIPPING - The address product is sent to.
   */
  functions?: FunctionsOrdersAddressesFunctions;
  /** The name associated with the address. */
  name?: string;
  /** The email address associated with the address. */
  email?: string;
  /** First line of the address. */
  line1?: string;
  /** Second line of the address. */
  line2?: string;
  /** Third line of the address. */
  line3?: string;
  /** The city associated with the address. */
  city?: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, US
   * Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /** The postal code of the address. */
  postalCode?: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  contactPhone?: ContactPhone5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addressesProperties: s.Shape<Addresses> = {
  functions: s.optional(s.lazy(() => functionsOrdersAddressesFunctionsSchema)),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
  contactPhone: s.optional(s.lazy(() => contactPhone5InternalSchema)),
  _keysMap: {
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
    contactPhone: "contact_phone",
  },
};

export const addressesInternalSchema: Schema<Addresses> = s.object<Addresses>(addressesProperties, {
  additionalProperties: s.json(),
});

export const addressesSchema: Schema<Addresses> = s.lazySchema(() =>
  s.object<Addresses>(
    {
      ...addressesProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line2: s.optional(s.string().check(s.maxLength(50))),
      line3: s.optional(s.string().check(s.maxLength(50))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      country: s.optional(s.string().check(s.maxLength(2))),
      contactPhone: s.optional(s.lazy(() => contactPhone5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
