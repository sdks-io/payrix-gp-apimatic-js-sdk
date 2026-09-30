import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentsResponseSchema, type AdjustmentsResponse } from "../adjustments-response.js";

/** The identifier of the Adjustment that this fund origin relates to. */
export type FundOriginsModelAdjustment = string | AdjustmentsResponse;

export const fundOriginsModelAdjustmentSchema: Schema<FundOriginsModelAdjustment> =
  s.of<FundOriginsModelAdjustment>(s.union([s.string(), s.lazy(() => adjustmentsResponseSchema)]));
