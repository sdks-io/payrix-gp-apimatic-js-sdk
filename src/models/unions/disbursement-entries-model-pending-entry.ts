import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "../pending-entries-response.js";

/** The identifier of the PendingEntry that this DisbursementEntry resource refers to. */
export type DisbursementEntriesModelPendingEntry = string | PendingEntriesResponse;

export const disbursementEntriesModelPendingEntrySchema: Schema<DisbursementEntriesModelPendingEntry> =
  s.of<DisbursementEntriesModelPendingEntry>(
    s.union([s.string(), s.lazy(() => pendingEntriesResponseSchema)]),
  );
