import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MobilePhone1 = {
  /** The country in ISO-3166-1(alpha-2 code) format */
  countryCode?: string;
  /** The phone number. */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mobilePhone1Properties: s.Shape<MobilePhone1> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const mobilePhone1InternalSchema: Schema<MobilePhone1> = s.object<MobilePhone1>(
  mobilePhone1Properties,
  { additionalProperties: s.json() },
);

export const mobilePhone1Schema: Schema<MobilePhone1> = s.lazySchema(() =>
  s.object<MobilePhone1>(
    {
      ...mobilePhone1Properties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
