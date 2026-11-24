import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { legInternalSchema, legSchema, type Leg } from "./leg.js";

export type Airline = {
  /** A reference for the airline booking. */
  bookingReference?: string;
  legs?: Leg[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const airlineProperties: s.Shape<Airline> = {
  bookingReference: s.optional(s.string()),
  legs: s.optional(s.array(s.lazy(() => legInternalSchema))),
  _keysMap: {
    bookingReference: "booking_reference",
  },
};

export const airlineInternalSchema: Schema<Airline> = s.object<Airline>(airlineProperties, {
  additionalProperties: s.json(),
});

export const airlineSchema: Schema<Airline> = s.lazySchema(() =>
  s.object<Airline>(
    {
      ...airlineProperties,
      bookingReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      legs: s.optional(s.array(s.lazy(() => legSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
