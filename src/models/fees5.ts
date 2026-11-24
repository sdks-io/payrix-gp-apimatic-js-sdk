import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Fees5 = {
  /** Name of the fee included */
  name?: string;
  /** Any additional fee amount merchant included. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fees5Properties: s.Shape<Fees5> = {
  name: s.optional(s.string()),
  amount: s.optional(s.string()),
};

export const fees5InternalSchema: Schema<Fees5> = s.object<Fees5>(fees5Properties, {
  additionalProperties: s.json(),
});

export const fees5Schema: Schema<Fees5> = s.lazySchema(() =>
  s.object<Fees5>(
    {
      ...fees5Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
