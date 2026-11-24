import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShippingPhone = {
  /**
   * The country code that is used when dialling the phone number from another country. For example
   * for USA or Canada it would be +1 for England it would be +44 for Germany it would be +49
   */
  countryCode?: string;
  /** The phone number. */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shippingPhoneProperties: s.Shape<ShippingPhone> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const shippingPhoneInternalSchema: Schema<ShippingPhone> = s.object<ShippingPhone>(
  shippingPhoneProperties,
  { additionalProperties: s.json() },
);

export const shippingPhoneSchema: Schema<ShippingPhone> = s.lazySchema(() =>
  s.object<ShippingPhone>(
    {
      ...shippingPhoneProperties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
