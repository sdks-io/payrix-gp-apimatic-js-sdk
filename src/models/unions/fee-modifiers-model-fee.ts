import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { feesResponseSchema, type FeesResponse } from "../fees-response.js";

/** The identifier of the Fee that this Fee Modifier applies. */
export type FeeModifiersModelFee = string | FeesResponse;

export const feeModifiersModelFeeSchema: Schema<FeeModifiersModelFee> = s.of<FeeModifiersModelFee>(
  s.union([s.string(), s.lazy(() => feesResponseSchema)]),
);
