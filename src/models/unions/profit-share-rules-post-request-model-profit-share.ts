import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  profitSharesPostRequestSchema,
  type ProfitSharesPostRequest,
} from "../profit-shares-post-request.js";

/** The identifier of the ProfitShare that this ProfitShare Rule applies to. */
export type ProfitShareRulesPostRequestModelProfitShare = string | ProfitSharesPostRequest;

export const profitShareRulesPostRequestModelProfitShareSchema: Schema<ProfitShareRulesPostRequestModelProfitShare> =
  s.of<ProfitShareRulesPostRequestModelProfitShare>(
    s.union([s.string(), s.lazy(() => profitSharesPostRequestSchema)]),
  );
