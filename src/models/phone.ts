import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Phone = {
  /** The country in ISO-3166-1(alpha-2 code) format */
  countryCode?: string;
  /** The phone number. */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const phoneProperties: s.Shape<Phone> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const phoneInternalSchema: Schema<Phone> = s.object<Phone>(phoneProperties, {
  additionalProperties: s.json(),
});

export const phoneSchema: Schema<Phone> = s.lazySchema(() =>
  s.object<Phone>(
    {
      ...phoneProperties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
