import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Payer8 = {
  /** Unique identifier for the Payer on the platform. */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer8Properties: s.Shape<Payer8> = {
  id: s.optional(s.string()),
};

export const payer8InternalSchema: Schema<Payer8> = s.object<Payer8>(payer8Properties, {
  additionalProperties: s.json(),
});

export const payer8Schema: Schema<Payer8> = s.lazySchema(() =>
  s.object<Payer8>(
    {
      ...payer8Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
