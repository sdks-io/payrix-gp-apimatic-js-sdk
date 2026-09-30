import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division in which entities will have automated payouts generated. */
export type PayoutFlowsModelDivision = string | DivisionsResponse;

export const payoutFlowsModelDivisionSchema: Schema<PayoutFlowsModelDivision> =
  s.of<PayoutFlowsModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));
