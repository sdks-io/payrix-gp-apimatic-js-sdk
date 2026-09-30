import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reservesResponseSchema, type ReservesResponse } from "../reserves-response.js";

/**
 * This field indicates that this reserveEntry was triggered from an automatic reserve, and it
 * stores the identifier of the Reserve resource.
 */
export type ReserveEntriesModelReserve = string | ReservesResponse;

export const reserveEntriesModelReserveSchema: Schema<ReserveEntriesModelReserve> =
  s.of<ReserveEntriesModelReserve>(s.union([s.string(), s.lazy(() => reservesResponseSchema)]));
