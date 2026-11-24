import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address13 = {
  /**
   * The address search reference returned from the GET Addresses function. This value will improve
   * the merchant boarding success rate for merchants in the UK.
   */
  reference?: string;
  /** UK only. The name associated with the address home/building. */
  buildingName?: string;
  /** UK only. The number associated with the address home/building. */
  buildingNumber?: string;
  /** First line of the address. */
  line1?: string;
  /** Second line of the address. */
  line2?: string;
  /** Third line of the address */
  line3?: string;
  /** The city associated with the address. */
  city?: string;
  /**
   * The state, county or region of the address. ISO 3166-2 minus the country code itself. For
   * example, US Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  /** The postal code of the address. */
  postalCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address13Properties: s.Shape<Address13> = {
  reference: s.optional(s.string()),
  buildingName: s.optional(s.string()),
  buildingNumber: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  _keysMap: {
    buildingName: "building_name",
    buildingNumber: "building_number",
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
  },
};

export const address13InternalSchema: Schema<Address13> = s.object<Address13>(address13Properties, {
  additionalProperties: s.json(),
});

export const address13Schema: Schema<Address13> = s.lazySchema(() =>
  s.object<Address13>(
    {
      ...address13Properties,
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      line2: s.optional(s.string().check(s.maxLength(255))),
      line3: s.optional(s.string().check(s.maxLength(255))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      country: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
