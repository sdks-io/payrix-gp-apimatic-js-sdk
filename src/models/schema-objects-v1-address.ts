import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SchemaObjectsV1Address = {
  /** First line of the address. */
  line1: string;
  /** Second line of the address. */
  line2?: string;
  /** Third line of the address. */
  line3?: string;
  /** The city associated with the address. */
  city: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, US
   * Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state: string;
  /** The postal code of the address. */
  postalCode: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const schemaObjectsV1AddressProperties: s.Shape<SchemaObjectsV1Address> = {
  line1: s.string(),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  postalCode: s.string(),
  country: s.string(),
  _keysMap: {
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
  },
};

export const schemaObjectsV1AddressInternalSchema: Schema<SchemaObjectsV1Address> =
  s.object<SchemaObjectsV1Address>(schemaObjectsV1AddressProperties, { additionalProperties: s.json() });

export const schemaObjectsV1AddressSchema: Schema<SchemaObjectsV1Address> = s.lazySchema(() =>
  s.object<SchemaObjectsV1Address>(
    {
      ...schemaObjectsV1AddressProperties,
      line1: s.string().check(s.minLength(1), s.maxLength(255)),
      line2: s.optional(s.string().check(s.minLength(0), s.maxLength(255))),
      line3: s.optional(s.string().check(s.minLength(0), s.maxLength(255))),
      city: s.string().check(s.minLength(1), s.maxLength(255)),
      state: s.string().check(s.minLength(1), s.maxLength(255)),
      postalCode: s.string().check(s.minLength(1), s.maxLength(255)),
      country: s.string().check(s.minLength(1), s.maxLength(255)),
    },
    { additionalProperties: s.json() },
  ),
);
