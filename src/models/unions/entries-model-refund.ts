import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { refundsResponseSchema, type RefundsResponse } from "../refunds-response.js";

/**
 * If the activity that this Entry refers to is the paying of a Refund, then this field stores the
 * identifier of the corresponding Refund resource.
 */
export type EntriesModelRefund = string | RefundsResponse;

export const entriesModelRefundSchema: Schema<EntriesModelRefund> = s.of<EntriesModelRefund>(
  s.union([s.string(), s.lazy(() => refundsResponseSchema)]),
);
