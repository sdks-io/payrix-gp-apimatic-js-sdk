import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactPhone5 = {
  /** The country code of the phone number. */
  countryCode?: string;
  /** The phone number. */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactPhone5Properties: s.Shape<ContactPhone5> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const contactPhone5InternalSchema: Schema<ContactPhone5> = s.object<ContactPhone5>(
  contactPhone5Properties,
  { additionalProperties: s.json() },
);

export const contactPhone5Schema: Schema<ContactPhone5> = s.lazySchema(() =>
  s.object<ContactPhone5>(
    {
      ...contactPhone5Properties,
      countryCode: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
