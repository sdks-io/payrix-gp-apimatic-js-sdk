import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { feesResponseSchema, type FeesResponse } from "../fees-response.js";

/**
 * If the activity that this Entry refers to is the charging of a Fee, then this field stores the
 * identifier of the corresponding Fee resource.
 */
export type EntriesModelFee = string | FeesResponse;

export const entriesModelFeeSchema: Schema<EntriesModelFee> = s.of<EntriesModelFee>(
  s.union([s.string(), s.lazy(() => feesResponseSchema)]),
);
