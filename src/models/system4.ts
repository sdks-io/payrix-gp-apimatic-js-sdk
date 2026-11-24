import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type System4 = {
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
  /** Identifies the originating system or channel from which the transaction was initiated. */
  globalTransactionSource?: string;
  /**
   * A unique identifier assigned to the original transaction used to track and reconcile the
   * transactions consistently across multiple systems.
   */
  globalTransactionReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const system4Properties: s.Shape<System4> = {
  mid: s.optional(s.string()),
  tid: s.optional(s.string()),
  hierarchy: s.optional(s.string()),
  name: s.optional(s.string()),
  dba: s.optional(s.string()),
  globalTransactionSource: s.optional(s.string()),
  globalTransactionReference: s.optional(s.string()),
  _keysMap: {
    globalTransactionSource: "global_transaction_source",
    globalTransactionReference: "global_transaction_reference",
  },
};

export const system4InternalSchema: Schema<System4> = s.object<System4>(system4Properties, {
  additionalProperties: s.json(),
});

export const system4Schema: Schema<System4> = s.lazySchema(() =>
  s.object<System4>(
    {
      ...system4Properties,
      mid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      tid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      hierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      dba: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      globalTransactionSource: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      globalTransactionReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
