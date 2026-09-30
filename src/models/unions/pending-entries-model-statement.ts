import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementsResponseSchema, type StatementsResponse } from "../statements-response.js";

/**
 * If the activity that this PendingEntry refers to is a Statement, then this field stores the
 * identifier of the corresponding Statement resource.
 */
export type PendingEntriesModelStatement = string | StatementsResponse;

export const pendingEntriesModelStatementSchema: Schema<PendingEntriesModelStatement> =
  s.of<PendingEntriesModelStatement>(s.union([s.string(), s.lazy(() => statementsResponseSchema)]));
