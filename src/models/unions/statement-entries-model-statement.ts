import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementsResponseSchema, type StatementsResponse } from "../statements-response.js";

/** The identifier of the Statement that this StatementEntry refers to. */
export type StatementEntriesModelStatement = string | StatementsResponse;

export const statementEntriesModelStatementSchema: Schema<StatementEntriesModelStatement> =
  s.of<StatementEntriesModelStatement>(s.union([s.string(), s.lazy(() => statementsResponseSchema)]));
