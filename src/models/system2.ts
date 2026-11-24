import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type System2 = {
  /** Merchant Identifier from Global Payments system for some features. */
  mid?: string;
  /** Terminal Identifier from Global Payments system for some features. */
  tid?: string;
  /**
   * Identifies the location of a merchant within the merchant's corporate hierarchical structure.
   * The structure for each gateway can be seen below: GPN - >
   * <corp>-<region>-<principle>-<associate>-<chain> HPY --> <Chain> EVO --> <Group>-<Chain>-<TaxID>
   */
  hierarchy?: string;
  /** The merchant name that is associated with the merchant. */
  name?: string;
  /** The alternate name the merchant may be known as. */
  dba?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const system2Properties: s.Shape<System2> = {
  mid: s.optional(s.string()),
  tid: s.optional(s.string()),
  hierarchy: s.optional(s.string()),
  name: s.optional(s.string()),
  dba: s.optional(s.string()),
};

export const system2InternalSchema: Schema<System2> = s.object<System2>(system2Properties, {
  additionalProperties: s.json(),
});

export const system2Schema: Schema<System2> = s.lazySchema(() =>
  s.object<System2>(
    {
      ...system2Properties,
      mid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      tid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      hierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      dba: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
