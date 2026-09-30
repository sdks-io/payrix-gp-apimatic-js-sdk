import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fundsResponseSchema, type FundsResponse } from "../funds-response.js";

/** The identifier of the Fund that this reserveEntries resource relates to. */
export type ReserveEntriesModelFund = string | FundsResponse;

export const reserveEntriesModelFundSchema: Schema<ReserveEntriesModelFund> = s.of<ReserveEntriesModelFund>(
  s.union([s.string(), s.lazy(() => fundsResponseSchema)]),
);
