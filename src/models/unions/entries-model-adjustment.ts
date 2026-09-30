import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentsResponseSchema, type AdjustmentsResponse } from "../adjustments-response.js";

/** The adjustment ID from which the funding activity was triggered. */
export type EntriesModelAdjustment = string | AdjustmentsResponse;

export const entriesModelAdjustmentSchema: Schema<EntriesModelAdjustment> = s.of<EntriesModelAdjustment>(
  s.union([s.string(), s.lazy(() => adjustmentsResponseSchema)]),
);
