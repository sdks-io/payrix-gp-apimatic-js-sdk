import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { profitSharesResponseSchema, type ProfitSharesResponse } from "../profit-shares-response.js";

/** The identifier of the ProfitShare that this ProfitShare Rule applies to. */
export type ProfitShareRulesModelProfitShare = string | ProfitSharesResponse;

export const profitShareRulesModelProfitShareSchema: Schema<ProfitShareRulesModelProfitShare> =
  s.of<ProfitShareRulesModelProfitShare>(s.union([s.string(), s.lazy(() => profitSharesResponseSchema)]));
