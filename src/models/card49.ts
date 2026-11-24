import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card49 = {
  /** The full card tag data for an EMV/chip card transaction. */
  tag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card49Properties: s.Shape<Card49> = {
  tag: s.optional(s.string()),
};

export const card49InternalSchema: Schema<Card49> = s.object<Card49>(card49Properties, {
  additionalProperties: s.json(),
});

export const card49Schema: Schema<Card49> = s.lazySchema(() =>
  s.object<Card49>(
    {
      ...card49Properties,
      tag: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
    },
    { additionalProperties: s.json() },
  ),
);
