import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The entry ID associated with this pendingEntry. */
export type ReserveEntriesModelEntry = string | EntriesResponse;

export const reserveEntriesModelEntrySchema: Schema<ReserveEntriesModelEntry> =
  s.of<ReserveEntriesModelEntry>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));
