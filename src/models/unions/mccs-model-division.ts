import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The Division on which this MCC applies. */
export type MccsModelDivision = string | DivisionsResponse;

export const mccsModelDivisionSchema: Schema<MccsModelDivision> = s.of<MccsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
