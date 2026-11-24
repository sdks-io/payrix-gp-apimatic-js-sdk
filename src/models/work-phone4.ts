import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkPhone4 = {
  /** The country in ISO-3166-1(alpha-2 code) format. */
  countryCode?: string;
  /** The phone number. */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workPhone4Properties: s.Shape<WorkPhone4> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const workPhone4InternalSchema: Schema<WorkPhone4> = s.object<WorkPhone4>(workPhone4Properties, {
  additionalProperties: s.json(),
});

export const workPhone4Schema: Schema<WorkPhone4> = s.lazySchema(() =>
  s.object<WorkPhone4>(
    {
      ...workPhone4Properties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
