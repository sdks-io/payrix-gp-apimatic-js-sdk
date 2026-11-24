import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address16 = {
  /** First line of the address. */
  line1?: string;
  /** Second line of the address. */
  line2?: string;
  /** Third line of the address */
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
  /** This is the country the bank is located in The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address16Properties: s.Shape<Address16> = {
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

export const address16InternalSchema: Schema<Address16> = s.object<Address16>(address16Properties, {
  additionalProperties: s.json(),
});

export const address16Schema: Schema<Address16> = s.lazySchema(() =>
  s.object<Address16>(
    {
      ...address16Properties,
      country: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
