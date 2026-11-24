import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address16InternalSchema, address16Schema, type Address16 } from "./address16.js";

export type Bank5 = {
  /** The local identifier code for the bank. */
  code?: string;
  /** The name of the bank. */
  name?: string;
  address?: Address16;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bank5Properties: s.Shape<Bank5> = {
  code: s.optional(s.string()),
  name: s.optional(s.string()),
  address: s.optional(s.lazy(() => address16InternalSchema)),
};

export const bank5InternalSchema: Schema<Bank5> = s.object<Bank5>(bank5Properties, {
  additionalProperties: s.json(),
});

export const bank5Schema: Schema<Bank5> = s.lazySchema(() =>
  s.object<Bank5>(
    {
      ...bank5Properties,
      address: s.optional(s.lazy(() => address16Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
