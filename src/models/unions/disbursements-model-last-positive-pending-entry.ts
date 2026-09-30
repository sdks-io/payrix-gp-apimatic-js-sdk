import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "../pending-entries-response.js";

/** The last positive PendingEntry processed included in the disbursement. */
export type DisbursementsModelLastPositivePendingEntry = string | PendingEntriesResponse;

export const disbursementsModelLastPositivePendingEntrySchema: Schema<DisbursementsModelLastPositivePendingEntry> =
  s.of<DisbursementsModelLastPositivePendingEntry>(
    s.union([s.string(), s.lazy(() => pendingEntriesResponseSchema)]),
  );
