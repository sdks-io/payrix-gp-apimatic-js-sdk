import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { functions2Schema, type Functions2 } from "./functions2.js";
import { phoneInternalSchema, phoneSchema, type Phone } from "./phone.js";

export type Addresses5 = {
  /**
   * Describes the functions that an address can have. * BUSINESS - The business address of the
   * merchant. *PREVIOUS_BUSINESS - The previous business address of the merchant (if the merchant
   * has not been at current address for at least 24 months). * SHIPPING - The address product is
   * sent to. * LEGAL - The legal registered business address of the merchant.
   */
  functions?: Functions2[];
  /** UK only. The name associated with the address home/building. */
  buildingName?: string;
  /** First line of the address. */
  line1?: string;
  /** Second line of the address. */
  line2?: string;
  /** Third line of the address. For the UK this should be the district. */
  line3?: string;
  /** The number of months at the address provided. */
  monthsAtAddress?: string;
  /** The city associated with the address. */
  city?: string;
  /** UK only. The post town associated with the address. */
  postTown?: string;
  /**
   * The state or region of the address. ISO 3166-2 minus the country code itself. For example, US
   * Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /** The postal code of the address. */
  postalCode?: string;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  phone?: Phone;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addresses5Properties: s.Shape<Addresses5> = {
  functions: s.optional(s.array(s.lazy(() => functions2Schema))),
  buildingName: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  monthsAtAddress: s.optional(s.string()),
  city: s.optional(s.string()),
  postTown: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phoneInternalSchema)),
  _keysMap: {
    buildingName: "building_name",
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    monthsAtAddress: "months_at_address",
    postTown: "post_town",
    postalCode: "postal_code",
  },
};

export const addresses5InternalSchema: Schema<Addresses5> = s.object<Addresses5>(addresses5Properties, {
  additionalProperties: s.json(),
});

export const addresses5Schema: Schema<Addresses5> = s.lazySchema(() =>
  s.object<Addresses5>(
    {
      ...addresses5Properties,
      buildingName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      line2: s.optional(s.string().check(s.maxLength(255))),
      line3: s.optional(s.string().check(s.maxLength(255))),
      monthsAtAddress: s.optional(s.string().check(s.maxLength(50))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      postTown: s.optional(s.string().check(s.maxLength(100))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      country: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      phone: s.optional(s.lazy(() => phoneSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
