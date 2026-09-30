import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The entry on which the funding source was recorded. */
export type EntryOriginsModelEntry = string | EntriesResponse;

export const entryOriginsModelEntrySchema: Schema<EntryOriginsModelEntry> = s.of<EntryOriginsModelEntry>(
  s.union([s.string(), s.lazy(() => entriesResponseSchema)]),
);
