import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { settlementsResponseSchema, type SettlementsResponse } from "../settlements-response.js";

/**
 * If the activity that this Entry refers to is a Settlement, then this field stores the identifier
 * of the corresponding Settlement resource.
 */
export type EntriesModelSettlement = string | SettlementsResponse;

export const entriesModelSettlementSchema: Schema<EntriesModelSettlement> = s.of<EntriesModelSettlement>(
  s.union([s.string(), s.lazy(() => settlementsResponseSchema)]),
);
