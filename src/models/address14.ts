import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address14 = {
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
  /** The country of the address. Countries are represented by the ISO-3166-1(alpha-2 code). */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address14Properties: s.Shape<Address14> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
  _keysMap: {
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
  },
};

export const address14InternalSchema: Schema<Address14> = s.object<Address14>(address14Properties, {
  additionalProperties: s.json(),
});

export const address14Schema: Schema<Address14> = s.lazySchema(() =>
  s.object<Address14>(
    {
      ...address14Properties,
      line1: s.optional(s.string().check(s.maxLength(50))),
      line2: s.optional(s.string().check(s.maxLength(50))),
      line3: s.optional(s.string().check(s.maxLength(50))),
      city: s.optional(s.string().check(s.maxLength(50))),
      state: s.optional(s.string().check(s.maxLength(50))),
      country: s.optional(s.string().check(s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
