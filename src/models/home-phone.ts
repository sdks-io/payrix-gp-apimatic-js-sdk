import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HomePhone = {
  /**
   * The country code that is used when dialling the phone number from another country. Note for
   * European merchants: This field is mandatory for SCA unless customer Email is being sent by the
   * Merchant. For example for USA or Canada it would be 1 for England it would be 44 for Germany it
   * would be 49
   */
  countryCode?: string;
  /**
   * The phone number.Note for European merchants: This field is mandatory for SCA unless customer
   * Email is being sent by the Merchant. Global Payments recommend you to send at least one phone
   * number (Mobile, Home or Work).
   */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const homePhoneProperties: s.Shape<HomePhone> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const homePhoneInternalSchema: Schema<HomePhone> = s.object<HomePhone>(homePhoneProperties, {
  additionalProperties: s.json(),
});

export const homePhoneSchema: Schema<HomePhone> = s.lazySchema(() =>
  s.object<HomePhone>(
    {
      ...homePhoneProperties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(3))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(15))),
    },
    { additionalProperties: s.json() },
  ),
);
