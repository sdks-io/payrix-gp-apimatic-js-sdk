import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { feesResponseSchema, type FeesResponse } from "../fees-response.js";

/** The identifier of the EventSchedule that this Bin is associated with. */
export type BinsModelEventSchedule = string | FeesResponse;

export const binsModelEventScheduleSchema: Schema<BinsModelEventSchedule> = s.of<BinsModelEventSchedule>(
  s.union([s.string(), s.lazy(() => feesResponseSchema)]),
);
