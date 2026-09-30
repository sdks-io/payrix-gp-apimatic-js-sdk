import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "../reserve-entries-response.js";

/** The last negative ReserveEntry processed included in the disbursement. */
export type DisbursementsModelLastNegativeReserveEntry = string | ReserveEntriesResponse;

export const disbursementsModelLastNegativeReserveEntrySchema: Schema<DisbursementsModelLastNegativeReserveEntry> =
  s.of<DisbursementsModelLastNegativeReserveEntry>(
    s.union([s.string(), s.lazy(() => reserveEntriesResponseSchema)]),
  );
