import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type System = {
  /** Merchant Identifier from the platform. */
  mid?: string;
  /** Merchant device or point of integration Identifier from the platform. */
  tid?: string;
  /** The merchant name that exists on the platform. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const systemProperties: s.Shape<System> = {
  mid: s.optional(s.string()),
  tid: s.optional(s.string()),
  name: s.optional(s.string()),
};

export const systemInternalSchema: Schema<System> = s.object<System>(systemProperties, {
  additionalProperties: s.json(),
});

export const systemSchema: Schema<System> = s.lazySchema(() =>
  s.object<System>(
    {
      ...systemProperties,
      mid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      tid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
