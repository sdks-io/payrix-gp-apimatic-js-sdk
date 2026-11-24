import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Bank3 = {
  /** The local identifier code for the bank. */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bank3Properties: s.Shape<Bank3> = {
  code: s.optional(s.string()),
};

export const bank3InternalSchema: Schema<Bank3> = s.object<Bank3>(bank3Properties, {
  additionalProperties: s.json(),
});

export const bank3Schema: Schema<Bank3> = s.lazySchema(() =>
  s.object<Bank3>(
    {
      ...bank3Properties,
      code: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
