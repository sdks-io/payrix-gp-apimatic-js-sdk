import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { settlementsResponseSchema, type SettlementsResponse } from "../settlements-response.js";

/**
 * If the activity that this PendingEntry refers to is a Settlement, then this field stores the
 * identifier of the corresponding Settlement resource.
 */
export type PendingEntriesModelSettlement = string | SettlementsResponse;

export const pendingEntriesModelSettlementSchema: Schema<PendingEntriesModelSettlement> =
  s.of<PendingEntriesModelSettlement>(s.union([s.string(), s.lazy(() => settlementsResponseSchema)]));
