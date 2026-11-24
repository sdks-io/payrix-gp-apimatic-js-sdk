import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkPhone1 = {
  /** The country in ISO-3166-1(alpha-2 code) format */
  countryCode?: string;
  /** The phone number */
  subsriberNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workPhone1Properties: s.Shape<WorkPhone1> = {
  countryCode: s.optional(s.string()),
  subsriberNumber: s.optional(s.string()),
  _keysMap: {
    countryCode: "country_code",
    subsriberNumber: "subsriber_number",
  },
};

export const workPhone1InternalSchema: Schema<WorkPhone1> = s.object<WorkPhone1>(workPhone1Properties, {
  additionalProperties: s.json(),
});

export const workPhone1Schema: Schema<WorkPhone1> = s.lazySchema(() =>
  s.object<WorkPhone1>(
    {
      ...workPhone1Properties,
      countryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      subsriberNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
