import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "../pending-entries-response.js";

/** The ID of the pending entry that is associated with this entry. */
export type EntriesModelPendingEntry = string | PendingEntriesResponse;

export const entriesModelPendingEntrySchema: Schema<EntriesModelPendingEntry> =
  s.of<EntriesModelPendingEntry>(s.union([s.string(), s.lazy(() => pendingEntriesResponseSchema)]));
