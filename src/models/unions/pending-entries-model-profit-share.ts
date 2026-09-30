import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { profitSharesResponseSchema, type ProfitSharesResponse } from "../profit-shares-response.js";

/**
 * If the activity that this PendingEntry refers to is a ProfitShare, then this field stores the
 * identifier of the corresponding ProfitShare resource.
 */
export type PendingEntriesModelProfitShare = string | ProfitSharesResponse;

export const pendingEntriesModelProfitShareSchema: Schema<PendingEntriesModelProfitShare> =
  s.of<PendingEntriesModelProfitShare>(s.union([s.string(), s.lazy(() => profitSharesResponseSchema)]));
