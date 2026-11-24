import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The billing address of the payer. Note for European merchants- All billing fields are recommended
 * for SCA.
 */
export type BillingAddress1 = {
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
  /**
   * This is the country of the address represented as in ISO 3166-1 format. Please click on <a
   * href="https://developer.globalpay.com/resources/codes/country-codes" target="_blank">Country
   * Codes</a> to access the full list of countries
   */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billingAddress1Properties: s.Shape<BillingAddress1> = {
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

export const billingAddress1InternalSchema: Schema<BillingAddress1> = s.object<BillingAddress1>(
  billingAddress1Properties,
  { additionalProperties: s.json() },
);

export const billingAddress1Schema: Schema<BillingAddress1> = s.lazySchema(() =>
  s.object<BillingAddress1>(
    {
      ...billingAddress1Properties,
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line2: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line3: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      country: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
