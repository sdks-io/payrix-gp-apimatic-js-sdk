import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address1 = {
  functions?: string[];
  /**
   * The name associated with the address home/building, Example The name of the store/merchant
   * making the request.
   */
  buildingName?: string;
  /** The reference used for the address. It can also be a Store ID. */
  reference?: string;
  /** First line of address. Specifies Apartment, Suite or Unit number */
  line1?: string;
  /** Second line of address. Specifies street number. */
  line2?: string;
  /** Third line of address. Specifies street name. */
  line3?: string;
  /** The city associated with the address. */
  city?: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, CA
   * Ontario ON, CA Queec QC, etc
   */
  state?: string;
  /** The postal code of the address. */
  postalCode?: string;
  /** The country in ISO-3166-1(alpha-2 code) format. Example US, CA */
  country?: string;
  /** A PO Box number to receive mail and packages */
  poBoxNumber?: string;
  /** The recipient name */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address1Properties: s.Shape<Address1> = {
  functions: s.optional(s.array(s.string())),
  buildingName: s.optional(s.string()),
  reference: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
  poBoxNumber: s.optional(s.string()),
  name: s.optional(s.string()),
  _keysMap: {
    buildingName: "building_name",
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
    poBoxNumber: "po_box_number",
  },
};

export const address1InternalSchema: Schema<Address1> = s.object<Address1>(address1Properties, {
  additionalProperties: s.json(),
});

export const address1Schema: Schema<Address1> = s.lazySchema(() =>
  s.object<Address1>(
    {
      ...address1Properties,
      buildingName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      line2: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      line3: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      country: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      poBoxNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
