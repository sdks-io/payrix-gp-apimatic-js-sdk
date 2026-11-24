import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Payer7 = {
  /** Unique identifier for the Payer on the platform. */
  id?: string;
  /** The first name of the Payer */
  firstName?: string;
  /** The last name of the Payer */
  lastName?: string;
  /** An integrator's reference to the payer. */
  reference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer7Properties: s.Shape<Payer7> = {
  id: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  reference: s.optional(s.string()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
  },
};

export const payer7InternalSchema: Schema<Payer7> = s.object<Payer7>(payer7Properties, {
  additionalProperties: s.json(),
});

export const payer7Schema: Schema<Payer7> = s.lazySchema(() =>
  s.object<Payer7>(
    {
      ...payer7Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
