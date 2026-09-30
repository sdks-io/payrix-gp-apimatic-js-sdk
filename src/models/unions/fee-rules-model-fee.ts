import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { feesResponseSchema, type FeesResponse } from "../fees-response.js";

/** The identifier of the Fee that this Fee Rule applies. */
export type FeeRulesModelFee = string | FeesResponse;

export const feeRulesModelFeeSchema: Schema<FeeRulesModelFee> = s.of<FeeRulesModelFee>(
  s.union([s.string(), s.lazy(() => feesResponseSchema)]),
);
