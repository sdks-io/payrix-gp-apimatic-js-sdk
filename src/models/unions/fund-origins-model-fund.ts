import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fundsResponseSchema, type FundsResponse } from "../funds-response.js";

/** The fund for which the amount is available from this source. */
export type FundOriginsModelFund = string | FundsResponse;

export const fundOriginsModelFundSchema: Schema<FundOriginsModelFund> = s.of<FundOriginsModelFund>(
  s.union([s.string(), s.lazy(() => fundsResponseSchema)]),
);
