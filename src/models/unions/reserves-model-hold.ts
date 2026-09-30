import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { holdsResponseSchema, type HoldsResponse } from "../holds-response.js";

/** The identifier of the Entity Hold from which this Reserve was generated. */
export type ReservesModelHold = string | HoldsResponse;

export const reservesModelHoldSchema: Schema<ReservesModelHold> = s.of<ReservesModelHold>(
  s.union([s.string(), s.lazy(() => holdsResponseSchema)]),
);
