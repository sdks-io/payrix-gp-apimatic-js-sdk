import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MobilePhone4 = {
  /**
   * The country code that is used when dialling the phone number from another country. For example
   * for USA or Canada it would be +1 for England it would be +44 for Germany it would be +49
   */
  countryCode?: string;
  /** Mobile phone number of the payer. */
  subscriberNumber?: string;
  /** The content for the SMS notification. */
  subscriberContent?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mobilePhone4Properties: s.Shape<MobilePhone4> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  subscriberContent: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
    subscriberContent: "subscriber_content",
  },
};

export const mobilePhone4InternalSchema: Schema<MobilePhone4> = s.object<MobilePhone4>(
  mobilePhone4Properties,
  { additionalProperties: s.json() },
);

export const mobilePhone4Schema: Schema<MobilePhone4> = s.lazySchema(() =>
  s.object<MobilePhone4>(
    {
      ...mobilePhone4Properties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
