import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address3InternalSchema, address3Schema, type Address3 } from "./address3.js";

export type Bank = {
  /** The name of the bank. */
  name?: string;
  /** Used to capture Partner Bank CIN. Only for use by banks partnered with Global */
  cin?: string;
  /** The local identifier code for the bank. */
  code?: string;
  /** The 8-11 character code that identifies your bank's country, city, bank, and branch. */
  internationalCode?: string;
  address?: Address3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankProperties: s.Shape<Bank> = {
  name: s.optional(s.string()),
  cin: s.optional(s.string()),
  code: s.optional(s.string()),
  internationalCode: s.optional(s.string()),
  address: s.optional(s.lazy(() => address3InternalSchema)),
  _keysMap: {
    internationalCode: "international_code",
  },
};

export const bankInternalSchema: Schema<Bank> = s.object<Bank>(bankProperties, {
  additionalProperties: s.json(),
});

export const bankSchema: Schema<Bank> = s.lazySchema(() =>
  s.object<Bank>(
    {
      ...bankProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cin: s.optional(s.string().check(s.maxLength(255))),
      code: s.optional(s.string().check(s.maxLength(50))),
      internationalCode: s.optional(s.string().check(s.maxLength(250))),
      address: s.optional(s.lazy(() => address3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
