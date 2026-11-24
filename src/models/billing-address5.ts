import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BillingAddress5 = {
  /** First line of the address. */
  line1?: string;
  /** Second line of the billing address. */
  line2?: string;
  /** Third line of the billing address. */
  line3?: string;
  /** City associated with the billing address. */
  city?: string;
  /** Postal code of the billing address. */
  postalCode?: string;
  /** This is the country of the address represented as in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billingAddress5Properties: s.Shape<BillingAddress5> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  city: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
  _keysMap: {
    line1: "line_1",
    line2: "line_2",
    line3: "line_3",
    postalCode: "postal_code",
  },
};

export const billingAddress5InternalSchema: Schema<BillingAddress5> = s.object<BillingAddress5>(
  billingAddress5Properties,
  { additionalProperties: s.json() },
);

export const billingAddress5Schema: Schema<BillingAddress5> = s.lazySchema(() =>
  s.object<BillingAddress5>(
    {
      ...billingAddress5Properties,
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line2: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      line3: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      country: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
