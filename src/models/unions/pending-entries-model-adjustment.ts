import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentsResponseSchema, type AdjustmentsResponse } from "../adjustments-response.js";

/** The adjustment ID from which the funding activity was triggered. */
export type PendingEntriesModelAdjustment = string | AdjustmentsResponse;

export const pendingEntriesModelAdjustmentSchema: Schema<PendingEntriesModelAdjustment> =
  s.of<PendingEntriesModelAdjustment>(s.union([s.string(), s.lazy(() => adjustmentsResponseSchema)]));
