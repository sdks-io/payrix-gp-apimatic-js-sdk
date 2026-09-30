import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that this Reserve's resource applies to. */
export type ReservesModelDivision = string | DivisionsResponse;

export const reservesModelDivisionSchema: Schema<ReservesModelDivision> = s.of<ReservesModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
