import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "../pending-entries-response.js";

/** The last negative PendingEntry processed included in the disbursement. */
export type DisbursementsModelLastNegativePendingEntry = string | PendingEntriesResponse;

export const disbursementsModelLastNegativePendingEntrySchema: Schema<DisbursementsModelLastNegativePendingEntry> =
  s.of<DisbursementsModelLastNegativePendingEntry>(
    s.union([s.string(), s.lazy(() => pendingEntriesResponseSchema)]),
  );
