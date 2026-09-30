import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The identifier of the Entry that this DisbursementEntry resource refers to. */
export type DisbursementEntriesModelEntry = string | EntriesResponse;

export const disbursementEntriesModelEntrySchema: Schema<DisbursementEntriesModelEntry> =
  s.of<DisbursementEntriesModelEntry>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));
