import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkPhone2 = {
  /** The country in ISO-3166-1(alpha-2 code) format */
  countryCode?: string;
  /** The phone number */
  subscriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workPhone2Properties: s.Shape<WorkPhone2> = {
  countryCode: s.optional(s.string()),
  subscriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subscriberNumber: "subscriber_number",
  },
};

export const workPhone2InternalSchema: Schema<WorkPhone2> = s.object<WorkPhone2>(workPhone2Properties, {
  additionalProperties: s.json(),
});

export const workPhone2Schema: Schema<WorkPhone2> = s.lazySchema(() =>
  s.object<WorkPhone2>(
    {
      ...workPhone2Properties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      subscriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
