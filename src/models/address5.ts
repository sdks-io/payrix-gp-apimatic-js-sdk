import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactPhoneInternalSchema, contactPhoneSchema, type ContactPhone } from "./contact-phone.js";
import { workPhone1InternalSchema, workPhone1Schema, type WorkPhone1 } from "./work-phone1.js";

export type Address5 = {
  /** UK only. The number associated with the address home/building. */
  buildingNumber?: string;
  /** UK only. The name associated with the address home/building. */
  buildingName?: string;
  /** First line of the address */
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
  contactPhone?: ContactPhone;
  workPhone?: WorkPhone1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address5Properties: s.Shape<Address5> = {
  buildingNumber: s.optional(s.string()),
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
  contactPhone: s.optional(s.lazy(() => contactPhoneInternalSchema)),
  workPhone: s.optional(s.lazy(() => workPhone1InternalSchema)),
  _keysMap: {
    buildingNumber: "building_number",
    buildingName: "building_name",
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    monthsAtAddress: "months_at_address",
    postTown: "post_town",
    postalCode: "postal_code",
    contactPhone: "contact_phone",
    workPhone: "work_phone",
  },
};

export const address5InternalSchema: Schema<Address5> = s.object<Address5>(address5Properties, {
  additionalProperties: s.json(),
});

export const address5Schema: Schema<Address5> = s.lazySchema(() =>
  s.object<Address5>(
    {
      ...address5Properties,
      buildingNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
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
      contactPhone: s.optional(s.lazy(() => contactPhoneSchema)),
      workPhone: s.optional(s.lazy(() => workPhone1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
