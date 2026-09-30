import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementsResponseSchema, type StatementsResponse } from "../statements-response.js";

/**
 * If the activity that this Entry refers to is a Statement, then this field stores the identifier
 * of the corresponding Statement resource.
 */
export type EntriesModelStatement = string | StatementsResponse;

export const entriesModelStatementSchema: Schema<EntriesModelStatement> = s.of<EntriesModelStatement>(
  s.union([s.string(), s.lazy(() => statementsResponseSchema)]),
);
