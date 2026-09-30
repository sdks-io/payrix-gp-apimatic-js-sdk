import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fundsResponseSchema, type FundsResponse } from "../funds-response.js";

/** The identifier of the Fund that this PendingEntry refers to. */
export type PendingEntriesModelFund = string | FundsResponse;

export const pendingEntriesModelFundSchema: Schema<PendingEntriesModelFund> = s.of<PendingEntriesModelFund>(
  s.union([s.string(), s.lazy(() => fundsResponseSchema)]),
);
