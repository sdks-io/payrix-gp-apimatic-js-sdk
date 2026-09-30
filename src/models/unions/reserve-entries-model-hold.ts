import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { holdsResponseSchema, type HoldsResponse } from "../holds-response.js";

/** The ID of the hold that generated this reserveEntry. */
export type ReserveEntriesModelHold = string | HoldsResponse;

export const reserveEntriesModelHoldSchema: Schema<ReserveEntriesModelHold> = s.of<ReserveEntriesModelHold>(
  s.union([s.string(), s.lazy(() => holdsResponseSchema)]),
);
