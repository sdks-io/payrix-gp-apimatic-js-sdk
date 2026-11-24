import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { functions2Schema, type Functions2 } from "./functions2.js";

export type Addresses7 = {
  /**
   * Describes the functions that an address can have. * BUSINESS - The business address of the
   * merchant. *PREVIOUS_BUSINESS - The previous business address of the merchant (if the merchant
   * has not been at current address for at least 24 months). * SHIPPING - The address product is
   * sent to. * LEGAL - The legal registered business address of the merchant.
   */
  functions?: Functions2[];
  /** First line of the address. */
  line1?: string;
  /** Second line of the address. */
  line2?: string;
  /** Third line of the address. For the UK this should be the district. */
  line3?: string;
  /** The city associated with the address. */
  city?: string;
  /** The postal code of the address. */
  postalCode?: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, US
   * Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addresses7Properties: s.Shape<Addresses7> = {
  functions: s.optional(s.array(s.lazy(() => functions2Schema))),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  _keysMap: {
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
  },
};

export const addresses7InternalSchema: Schema<Addresses7> = s.object<Addresses7>(addresses7Properties, {
  additionalProperties: s.json(),
});

export const addresses7Schema: Schema<Addresses7> = s.lazySchema(() =>
  s.object<Addresses7>(
    {
      ...addresses7Properties,
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      line2: s.optional(s.string().check(s.maxLength(255))),
      line3: s.optional(s.string().check(s.maxLength(255))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      country: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
