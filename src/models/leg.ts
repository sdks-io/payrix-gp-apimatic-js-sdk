import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Leg = {
  /** The flight number associated with the leg. */
  flightNumber?: string;
  /** The leg number of the airline booking. */
  number?: string;
  /** The date and time of leg departure */
  timeOfDepature?: Date;
  /** The date and time of leg arrival */
  timeOfArrival?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const legProperties: s.Shape<Leg> = {
  flightNumber: s.optional(s.string()),
  number: s.optional(s.string()),
  timeOfDepature: s.optional(s.dateTime()),
  timeOfArrival: s.optional(s.dateTime()),
  _keysMap: {
    flightNumber: "flight_number",
    timeOfDepature: "time_of_depature",
    timeOfArrival: "time_of_arrival",
  },
};

export const legInternalSchema: Schema<Leg> = s.object<Leg>(legProperties, {
  additionalProperties: s.json(),
});

export const legSchema: Schema<Leg> = s.lazySchema(() =>
  s.object<Leg>(
    {
      ...legProperties,
      flightNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      number: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
