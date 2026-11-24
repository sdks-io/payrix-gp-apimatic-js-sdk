import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShippingAddress3 = {
  /** First line of the address */
  line1?: string;
  /** Second line of the address */
  line2?: string;
  /** Third line of the address */
  line3?: string;
  /** The city associated with the address */
  city?: string;
  /** The postal code of the address. */
  postalCode?: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, US
   * Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /** This is the country of the address represented as in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shippingAddress3Properties: s.Shape<ShippingAddress3> = {
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

export const shippingAddress3InternalSchema: Schema<ShippingAddress3> = s.object<ShippingAddress3>(
  shippingAddress3Properties,
  { additionalProperties: s.json() },
);

export const shippingAddress3Schema: Schema<ShippingAddress3> = s.lazySchema(() =>
  s.object<ShippingAddress3>(
    {
      ...shippingAddress3Properties,
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line2: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line3: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      country: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
