import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactPhoneInternalSchema, contactPhoneSchema, type ContactPhone } from "./contact-phone.js";
import { functions2Schema, type Functions2 } from "./functions2.js";

export type Addresses3 = {
  /**
   * Describes the functions that an address can have. * BUSINESS - The business address of the
   * merchant
   */
  functions?: Functions2[];
  /** The reference used for the address. It can also be a Store ID. */
  reference: string;
  /**
   * The name associated with the address home/building, Example The name of the store/merchant
   * making the request.
   */
  buildingName: string;
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
  postalCode: string;
  /** The country in ISO-3166-1(alpha-2 code) format. Example US, CA */
  country: string;
  /** A PO Box number to receive mail and packages */
  poBoxNumber?: string;
  contactPhone?: ContactPhone;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addresses3Properties: s.Shape<Addresses3> = {
  functions: s.optional(s.array(s.lazy(() => functions2Schema))),
  reference: s.string(),
  buildingName: s.string(),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.string(),
  country: s.string(),
  poBoxNumber: s.optional(s.string()),
  contactPhone: s.optional(s.lazy(() => contactPhoneInternalSchema)),
  _keysMap: {
    buildingName: "building_name",
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
    poBoxNumber: "po_box_number",
    contactPhone: "contact_phone",
  },
};

export const addresses3InternalSchema: Schema<Addresses3> = s.object<Addresses3>(addresses3Properties, {
  additionalProperties: s.json(),
});

export const addresses3Schema: Schema<Addresses3> = s.lazySchema(() =>
  s.object<Addresses3>(
    {
      ...addresses3Properties,
      reference: s.string().check(s.minLength(1), s.maxLength(50)),
      buildingName: s.string().check(s.minLength(1), s.maxLength(50)),
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      line2: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      line3: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      postalCode: s.string().check(s.minLength(1), s.maxLength(255)),
      country: s.string().check(s.minLength(1), s.maxLength(255)),
      poBoxNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      contactPhone: s.optional(s.lazy(() => contactPhoneSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
