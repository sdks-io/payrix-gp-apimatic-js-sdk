import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementsResponseSchema, type StatementsResponse } from "../statements-response.js";

/** The statement ID for which this transaction is being processed as payment. */
export type TxnsModelStatement = string | StatementsResponse;

export const txnsModelStatementSchema: Schema<TxnsModelStatement> = s.of<TxnsModelStatement>(
  s.union([s.string(), s.lazy(() => statementsResponseSchema)]),
);
