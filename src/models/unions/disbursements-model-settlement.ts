import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { settlementsResponseSchema, type SettlementsResponse } from "../settlements-response.js";

/** The settlement record for this disbursement. */
export type DisbursementsModelSettlement = string | SettlementsResponse;

export const disbursementsModelSettlementSchema: Schema<DisbursementsModelSettlement> =
  s.of<DisbursementsModelSettlement>(s.union([s.string(), s.lazy(() => settlementsResponseSchema)]));
