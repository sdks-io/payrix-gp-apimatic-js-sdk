import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HomePhone1 = {
  /** The country in ISO-3166-1(alpha-2 code) format. */
  countryCode?: string;
  /** The phone number. */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const homePhone1Properties: s.Shape<HomePhone1> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const homePhone1InternalSchema: Schema<HomePhone1> = s.object<HomePhone1>(homePhone1Properties, {
  additionalProperties: s.json(),
});

export const homePhone1Schema: Schema<HomePhone1> = s.lazySchema(() =>
  s.object<HomePhone1>(
    {
      ...homePhone1Properties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
