import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityDebtsResponseSchema, type EntityDebtsResponse } from "../entity-debts-response.js";

/** The ID of the entityDebt representing the relationship for the debt */
export type PendingEntriesModelEntityDebt = string | EntityDebtsResponse;

export const pendingEntriesModelEntityDebtSchema: Schema<PendingEntriesModelEntityDebt> =
  s.of<PendingEntriesModelEntityDebt>(s.union([s.string(), s.lazy(() => entityDebtsResponseSchema)]));
