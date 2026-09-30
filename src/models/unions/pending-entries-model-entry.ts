import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The entry ID associated with this pendingEntry. */
export type PendingEntriesModelEntry = string | EntriesResponse;

export const pendingEntriesModelEntrySchema: Schema<PendingEntriesModelEntry> =
  s.of<PendingEntriesModelEntry>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));
