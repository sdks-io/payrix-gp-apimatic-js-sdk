import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "../reserve-entries-response.js";

/**
 * This field indicates that this reserveEntry shows funds moving out of or into reserve. This field
 * stores the identifier of the reserveEntry resource that moved the funds into or out of the
 * reserve.
 */
export type ReserveEntriesModelReserveEntry = string | ReserveEntriesResponse;

export const reserveEntriesModelReserveEntrySchema: Schema<ReserveEntriesModelReserveEntry> =
  s.of<ReserveEntriesModelReserveEntry>(s.union([s.string(), s.lazy(() => reserveEntriesResponseSchema)]));
