import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fundsResponseSchema, type FundsResponse } from "../funds-response.js";

/** The identifier of the Fund that this Entry refers to. */
export type EntriesModelFund = string | FundsResponse;

export const entriesModelFundSchema: Schema<EntriesModelFund> = s.of<EntriesModelFund>(
  s.union([s.string(), s.lazy(() => fundsResponseSchema)]),
);
