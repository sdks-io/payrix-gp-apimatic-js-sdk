import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type System5 = {
  /** Merchant Identifier from Global Payments system for some features. */
  mid?: string;
  /**
   * Identifies the location of a merchant within the merchant's corporate hierarchical structure.
   */
  hierarchy?: string;
  /** The merchant name that is associated with the merchant. */
  name?: string;
  /** The alternate name the merchant may be known as. */
  dba?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const system5Properties: s.Shape<System5> = {
  mid: s.optional(s.string()),
  hierarchy: s.optional(s.string()),
  name: s.optional(s.string()),
  dba: s.optional(s.string()),
};

export const system5InternalSchema: Schema<System5> = s.object<System5>(system5Properties, {
  additionalProperties: s.json(),
});

export const system5Schema: Schema<System5> = s.lazySchema(() =>
  s.object<System5>(
    {
      ...system5Properties,
      mid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      hierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dba: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
