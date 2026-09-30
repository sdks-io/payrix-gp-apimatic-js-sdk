import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "../reserve-entries-response.js";

/** The last positive ReserveEntry processed included in the disbursement. */
export type DisbursementsModelLastPositiveReserveEntry = string | ReserveEntriesResponse;

export const disbursementsModelLastPositiveReserveEntrySchema: Schema<DisbursementsModelLastPositiveReserveEntry> =
  s.of<DisbursementsModelLastPositiveReserveEntry>(
    s.union([s.string(), s.lazy(() => reserveEntriesResponseSchema)]),
  );
