import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityReservesResponseSchema, type EntityReservesResponse } from "../entity-reserves-response.js";

/**
 * This field indicates that this reserveEntry was triggered from a manual change to an
 * entityReserve, and it stores the identifier of the entityReserve resource.
 */
export type ReserveEntriesModelEntityReserve = string | EntityReservesResponse;

export const reserveEntriesModelEntityReserveSchema: Schema<ReserveEntriesModelEntityReserve> =
  s.of<ReserveEntriesModelEntityReserve>(s.union([s.string(), s.lazy(() => entityReservesResponseSchema)]));
