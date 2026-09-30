import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { profitSharesResponseSchema, type ProfitSharesResponse } from "../profit-shares-response.js";

/** The identifier of the ProfitShare that this ProfitShareResult refers to. */
export type ProfitShareResultsModelProfitShare = string | ProfitSharesResponse;

export const profitShareResultsModelProfitShareSchema: Schema<ProfitShareResultsModelProfitShare> =
  s.of<ProfitShareResultsModelProfitShare>(s.union([s.string(), s.lazy(() => profitSharesResponseSchema)]));
