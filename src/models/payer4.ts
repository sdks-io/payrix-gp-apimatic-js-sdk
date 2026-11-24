import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Payer4 = {
  /** Unique identifier for the Payer on the platform. */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer4Properties: s.Shape<Payer4> = {
  id: s.optional(s.string()),
};

export const payer4InternalSchema: Schema<Payer4> = s.object<Payer4>(payer4Properties, {
  additionalProperties: s.json(),
});

export const payer4Schema: Schema<Payer4> = s.lazySchema(() =>
  s.object<Payer4>(
    {
      ...payer4Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
