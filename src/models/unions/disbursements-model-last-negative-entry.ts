import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The last negative Entry processed included in the disbursement. */
export type DisbursementsModelLastNegativeEntry = string | EntriesResponse;

export const disbursementsModelLastNegativeEntrySchema: Schema<DisbursementsModelLastNegativeEntry> =
  s.of<DisbursementsModelLastNegativeEntry>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));
