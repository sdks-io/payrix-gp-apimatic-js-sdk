import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "../chargebacks-response.js";

/**
 * If the activity that this PendingEntry refers to is a Chargeback, then this field stores the
 * identifier of the corresponding Chargeback resource.
 */
export type PendingEntriesModelChargeback = string | ChargebacksResponse;

export const pendingEntriesModelChargebackSchema: Schema<PendingEntriesModelChargeback> =
  s.of<PendingEntriesModelChargeback>(s.union([s.string(), s.lazy(() => chargebacksResponseSchema)]));
