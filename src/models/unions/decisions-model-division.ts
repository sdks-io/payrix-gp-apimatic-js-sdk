import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that this decision resource belongs to. */
export type DecisionsModelDivision = string | DivisionsResponse;

export const decisionsModelDivisionSchema: Schema<DecisionsModelDivision> = s.of<DecisionsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
