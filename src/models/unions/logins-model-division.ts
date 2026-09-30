import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The division that this Login belongs to. */
export type LoginsModelDivision = string | DivisionsResponse;

export const loginsModelDivisionSchema: Schema<LoginsModelDivision> = s.of<LoginsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
