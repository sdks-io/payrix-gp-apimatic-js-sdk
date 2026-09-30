import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "../reserve-entries-response.js";

/** The identifier of the ReserveEntry that this DisbursementEntry resource refers to. */
export type DisbursementEntriesModelReserveEntry = string | ReserveEntriesResponse;

export const disbursementEntriesModelReserveEntrySchema: Schema<DisbursementEntriesModelReserveEntry> =
  s.of<DisbursementEntriesModelReserveEntry>(
    s.union([s.string(), s.lazy(() => reserveEntriesResponseSchema)]),
  );
