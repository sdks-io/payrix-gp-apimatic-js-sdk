import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The last positive Entry processed included in the disbursement. */
export type DisbursementsModelLastPositiveEntry = string | EntriesResponse;

export const disbursementsModelLastPositiveEntrySchema: Schema<DisbursementsModelLastPositiveEntry> =
  s.of<DisbursementsModelLastPositiveEntry>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));
