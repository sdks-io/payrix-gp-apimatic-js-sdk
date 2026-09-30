import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division resource for which this orgFlows resource is triggered. */
export type OrgFlowsModelDivision = string | DivisionsResponse;

export const orgFlowsModelDivisionSchema: Schema<OrgFlowsModelDivision> = s.of<OrgFlowsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
