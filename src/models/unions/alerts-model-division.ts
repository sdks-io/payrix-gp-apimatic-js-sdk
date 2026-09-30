import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that this Alert applies to. */
export type AlertsModelDivision = string | DivisionsResponse;

export const alertsModelDivisionSchema: Schema<AlertsModelDivision> = s.of<AlertsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
