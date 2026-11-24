import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Order38 = {
  /** The merchant's reference for the order the transaction is associated with.. */
  reference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order38Properties: s.Shape<Order38> = {
  reference: s.optional(s.string()),
};

export const order38InternalSchema: Schema<Order38> = s.object<Order38>(order38Properties, {
  additionalProperties: s.json(),
});

export const order38Schema: Schema<Order38> = s.lazySchema(() =>
  s.object<Order38>(
    {
      ...order38Properties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
