import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The identifier of the Entry that this Entry was created based on. */
export type EntriesModelOpposingEntry = string | EntriesResponse;

export const entriesModelOpposingEntrySchema: Schema<EntriesModelOpposingEntry> =
  s.of<EntriesModelOpposingEntry>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));
