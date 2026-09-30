import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the record that is associated with this StatementEntry. */
export type StatementEntriesModelEventId = string | TxnsResponse;

export const statementEntriesModelEventIdSchema: Schema<StatementEntriesModelEventId> =
  s.of<StatementEntriesModelEventId>(s.union([s.string(), s.lazy(() => txnsResponseSchema)]));
