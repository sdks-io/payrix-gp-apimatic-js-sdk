import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactPhone = {
  /** The country in ISO-3166-1(alpha-2 code) format */
  countryCode?: string;
  /** The phone number. */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactPhoneProperties: s.Shape<ContactPhone> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const contactPhoneInternalSchema: Schema<ContactPhone> = s.object<ContactPhone>(
  contactPhoneProperties,
  { additionalProperties: s.json() },
);

export const contactPhoneSchema: Schema<ContactPhone> = s.lazySchema(() =>
  s.object<ContactPhone>(
    {
      ...contactPhoneProperties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
