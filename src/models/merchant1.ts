import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address14InternalSchema, address14Schema, type Address14 } from "./address14.js";

export type Merchant1 = {
  /** The full name of the payer. */
  name?: string;
  address?: Address14;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchant1Properties: s.Shape<Merchant1> = {
  name: s.optional(s.string()),
  address: s.optional(s.lazy(() => address14InternalSchema)),
};

export const merchant1InternalSchema: Schema<Merchant1> = s.object<Merchant1>(merchant1Properties, {
  additionalProperties: s.json(),
});

export const merchant1Schema: Schema<Merchant1> = s.lazySchema(() =>
  s.object<Merchant1>(
    {
      ...merchant1Properties,
      address: s.optional(s.lazy(() => address14Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
