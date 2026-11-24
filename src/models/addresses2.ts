import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactPhone5InternalSchema, contactPhone5Schema, type ContactPhone5 } from "./contact-phone5.js";

export type Addresses2 = {
  functions?: Record<string, unknown>[];
  /** The name associated with the address. */
  name?: string;
  /** The email address associated with the address. */
  email?: string;
  /** The city associated with the address. */
  city?: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, US
   * Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  /** First line of the address. */
  line1?: string;
  /** Second line of the address. */
  line2?: string;
  /** Third line of the address. */
  line3?: string;
  /** The postal code of the address. */
  postalCode?: string;
  contactPhone?: ContactPhone5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addresses2Properties: s.Shape<Addresses2> = {
  functions: s.optional(s.array(s.record(s.string(), s.unknown()))),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  contactPhone: s.optional(s.lazy(() => contactPhone5InternalSchema)),
  _keysMap: {
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
    contactPhone: "contact_phone",
  },
};

export const addresses2InternalSchema: Schema<Addresses2> = s.object<Addresses2>(addresses2Properties, {
  additionalProperties: s.json(),
});

export const addresses2Schema: Schema<Addresses2> = s.lazySchema(() =>
  s.object<Addresses2>(
    {
      ...addresses2Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      country: s.optional(s.string().check(s.maxLength(2))),
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line2: s.optional(s.string().check(s.maxLength(50))),
      line3: s.optional(s.string().check(s.maxLength(50))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      contactPhone: s.optional(s.lazy(() => contactPhone5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
